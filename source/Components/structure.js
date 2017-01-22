export default {
  global: {
    rules: {
      html: {
        boxSizing: 'border-box'
      },
      '*, *:before, *:after': {
        boxSizing: 'inherit'
      }
    }
  },
  btn: {
    cursor: 'pointer'
  },
  btnIcon: {
    height: '10px',
    marginRight: '5px'
  },
  checkbox: {
    WebkitAppearance: 'none',
    width: '15px',
    height: '15px',
    margin: 0,
    cursor: 'pointer',
    outline: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%'
  },
  currencyText: {
    display: 'inline-block',
    margin: '0 0 5px 5px'
  },
  dropdown: {
    display: 'inline'
  },
  fullField: {
    display: 'flex',
    marginBottom: '10px'
  },
  fieldContainerVertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  fieldContainerVerticalReverse: {
    flexDirection: 'column-reverse'
  },
  fieldContainerHorizontal: {
    display: 'inline-flex',
    flex: 1,
    alignItems: 'center'
  },
  fieldContainerHorizontalReverse: {
    flexDirection: 'row-reverse'
  },
  fieldContentHorizontal: {
    flex: 1
  },
  fieldErrorPopup: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: '50%',
    display: 'inline-flex',
    height: '17px',
    marginBottom: '2px',
    marginLeft: '2px',
    position: 'relative',
    width: '17px'
  },
  fieldErrorCaret: {
    borderStyle: 'solid',
    borderWidth: '6px 6px 0 6px',
    bottom: '21px',
    left: '2px',
    position: 'absolute',
    zIndex: 99
  },
  fieldErrorIcon: {
    flex: 2,
    textAlign: 'center'
  },
  fieldErrorMessage: {
    bottom: '26px',
    left: '-15px',
    minHeight: '16px',
    padding: '10px 15px',
    position: 'absolute',
    width: '150px',
    zIndex: 98
  },
  fieldLabelHorizontal: {
    display: 'inline-flex',
    paddingBottom: '2px',
    width: '160px'
  },
  fieldLabelHorizontalReverse: {
    flexDirection: 'row-reverse'
  },
  fieldLabelHorizontalCenter: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  fieldLabelHorizontalLeft: {
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  fieldLabelHorizontalRight: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    paddingRight: '10px'
  },
  fieldLabelHorizontalLeftReverse: {
    justifyContent: 'flex-end',
    paddingLeft: '10px'
  },
  fieldLabelHorizontalRightReverse: {
    justifyContent: 'flex-start',
    paddingRight: 0
  },
  fieldLabelVertical: {
    width: '100%'
  },
  fieldLabelVerticalCenter: {
    textAlign: 'center'
  },
  fieldLabelVerticalLeft: {
    textAlign: 'left'
  },
  fieldLabelVerticalRight: {
    textAlign: 'right'
  },
  gridBox: {
    display: 'flex',
    flex: 1,
    marginBottom: '10px'
  },
  gridBoxBody: {
    display: 'flex',
    flex: 1,
    padding: '15px',
    borderWidth: '1px',
    borderStyle: 'solid',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  gridBoxButtons: {
    marginTop: '30px'
  },
  gridBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  gridBoxHeader: {
    display: 'flex',
    alignItems: 'center',
    height: '25px',
    marginBottom: '5px',
    padding: '0 15px'
  },
  gridBoxHeaderH1: {
    display: 'inline-block',
    margin: 0
  },
  gridColumn: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  gridRow: {
    display: 'flex',
    flex: 1
  },
  icon: {
    cursor: 'pointer'
  },
  iconStrip: {
    width: '35px'
  },
  iconStripLi: {
    lineHeight: 0
  },
  iconStripUl: {
    listStyle: 'none',
    textAlign: 'center',
    padding: '0 4px',
    margin: 0
  },
  navContainer: {
    display: 'flex',
    listStyle: 'none',
    margin: '0 0 10px 0',
    paddingLeft: 0
  },
  navItem: {
    cursor: 'pointer',
    width: '100px',
    height: '25px',
    textAlign: 'center',
    paddingTop: '1px',
    borderBottomWidth: '3px'
  },
  navItemCurrent: {
    cursor: 'default'
  },
  navItemCurrentCaret: {
    width: 0,
    height: 0,
    margin: '0 auto',
    borderWidth: '9px 7px 0 7px'
  },
  spacer: {
    flex: 1
  },
  stage: {
    padding: '10px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    outline: 0
  },
  tableCell: {
    padding: '3px 15px',
    fontSize: '12px',
    color: '#4D4D4D'
  },
  tableWrapper: {
    minHeight: '70px',
    borderWidth: '1px',
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC'
  },
  tableHeaderCell: {
    textAlign: 'left',
    padding: '3px 14px',
    borderRightWidth: '1px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#808080',
    borderRightStyle: 'solid',
    borderRightColor: '#CCCCCC'
  },
  tableHeaderRow: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#CCCCCC'
  },
  tableRow: {
    borderTopStyle: 'solid',
    borderTopColor: '#CCCCCC',
    cursor: 'pointer',
    borderTopWidth: '1px'
  },
  tableRowSelected: {
    borderTopStyle: 'solid',
    borderTopColor: '#CCCCCC',
    backgroundColor: '#CED0CB',
    cursor: 'pointer',
    borderTopWidth: '1px'
  },
  textbox: {
    width: '150px',
    height: '25px',
    padding: '4px 0 4px 10px'
  },
  textboxDisabled: {
    backgroundColor: '#F1F1F1',
    borderColor: '#CCCCCC'
  },
  vehicleBlock: {
    display: 'inline-block',
    borderTopWidth: '6px',
    margin: '5px'
  },
  vehicleBlockHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '20px',
    padding: '4px 0',
    borderLeftWidth: '1px',
    borderRightWidth: '1px'
  },
  vehicleBlockImage: {
    borderWidth: '1px'
  },
  vehicleBlockRemoveLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '4px 0'
  },
  vehicleImageImg: {
    display: 'block'
  }
};
