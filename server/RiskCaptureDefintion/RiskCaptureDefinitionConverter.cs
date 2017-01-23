namespace RiskCaptureDefintion
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Text.RegularExpressions;
    using System.Xml.Linq;
    using AppliedSystems.Collections;
    using AppliedSystems.Core;
    using AppliedSystems.Xml;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    public static class RiskCaptureDefinitionConverter
    {
        public static string Convert(string definitionXml)
        {
            var riskCaptureDefinition = RiskCaptureDefinitionParser.Parse(definitionXml.ToXDocument());
            return JsonConvert.SerializeObject(riskCaptureDefinition, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }

    public class RiskCaptureDefinitionParser
    {
        public static RiskCaptureDefinition Parse(XDocument defintion)
        {
            var riskCaptureDefinition = new RiskCaptureDefinition(defintion.Root.Attribute("policyLine").Value);

            ParsePages(defintion, riskCaptureDefinition);

            return riskCaptureDefinition;
        }

        private static void ParsePages(XDocument defintion, RiskCaptureDefinition riskCaptureDefinition)
        {
            defintion.Root
                .Element("Pages")
                .Elements()
                .ForEach(pageElement => { ParsePage(pageElement, riskCaptureDefinition); });
        }

        private static void ParsePage(XElement pageElement, RiskCaptureDefinition riskCaptureDefinition)
        {
            Page page = new Page(pageElement.Attribute("name").Value);
            ParseGroupLayout(pageElement, page);
            ParseGroups(pageElement, page);
            riskCaptureDefinition.Pages.Add(pageElement.Attribute("name").Value, page);
        }

        private static void ParseGroups(XElement pageElement, Page page)
        {
            pageElement
                .Element("Groups")
                .Elements()
                .ForEach(groupElement =>
                {
                    ParseGroup(page, groupElement);
                });
        }

        private static void ParseGroup(Page page, XElement groupElement)
        {
            int groupId = groupElement.Attribute("groupId").ValueToInt32();

            if (groupElement.Name == "Group")
            {
                page.Groups.Add(groupId);
            }
            if (groupElement.Name == "RepeatingGroup")
            {
                page.RepeatingGroups.Add(groupId);
            }
        }

        private static void ParseGroupLayout(XElement pageElement, Page page)
        {
            pageElement
                .Element("GroupLayout")
                .Elements()
                .ForEach(layoutRowElement => ParseGroupLayoutRows(page, layoutRowElement));
        }

        private static void ParseGroupLayoutRows(Page page, XElement layoutRowElement)
        {
            var groupLayoutCells = new GroupLayoutCells();
            page.GroupLayout.Add(groupLayoutCells);
            layoutRowElement.Elements().ForEach(layoutCellsElement => { groupLayoutCells.Add(layoutCellsElement.Attribute("groupId").ValueToInt32()); });
        }
    }

    public class RiskCaptureDefinition
    {
        public string PolicyLine { get; set; }
        public Pages Pages { get; set; }

        public RiskCaptureDefinition(string policyLine)
        {
            PolicyLine = policyLine;
            Pages = new Pages();
        }
    }

    public class Pages : Dictionary<string, Page>
    {
    }

    public class Page
    {
        public string Name { get; set; }
        public GroupLayoutRows GroupLayout { get; set; }
        public Index Groups { get; set; }
        public Index RepeatingGroups { get; set; }

        public Page(string name)
        {
            Name = name;
            GroupLayout = new GroupLayoutRows();
            Groups = new Index();
            RepeatingGroups = new Index();
        }
    }

    public class Index : List<int>
    {
    }

    public class GroupLayoutRows : List<GroupLayoutCells>
    {
    }

    public class GroupLayoutCells : List<int>
    {
    }
}