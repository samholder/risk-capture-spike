using System;
using TechTalk.SpecFlow;

namespace Specifications.Steps
{
    using FluentAssertions;
    using Newtonsoft.Json;
    using RiskCaptureDefintion;

    [Binding]
    public class ConversionSteps
    {
        private string definitionXml;
        private string definitionJson;

        [Given(@"I have the following xml:")]
        public void GivenIHaveTheFollowingXml(string xml)
        {
            definitionXml = xml;
        }
        
        [When(@"I convert the risk capture xml to json")]
        public void WhenIConvertTheRiskCaptureXmlToJson()
        {
            definitionJson = RiskCaptureDefinitionConverter.Convert(definitionXml);
        }
        
        [Then(@"I should receive the following json:")]
        public void ThenIShouldReceiveTheFollowingJson(string json)
        {
            var formattedDefinitionJson = JsonConvert.DeserializeObject(definitionJson).ToString();
            var formattedJson = JsonConvert.DeserializeObject(json).ToString();
            formattedDefinitionJson.Should().Be(formattedJson);
        }
    }
}
