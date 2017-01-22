const resolveValueFromSource = (source, instance, instanceId, risk) => {
  if (source.type === 'riskItem') {
    return risk.some(r => r.riskItem === source.riskItem && r.instanceId === instanceId) ?
      risk.find(r => r.riskItem === source.riskItem && r.instanceId === instanceId).value :
      '';
  }
  if (source.type === 'index') {
    return instance.availableInstances.findIndex(i => i === instanceId) + 1;
  }
  return '';
};

exports.resolveValueFromSource = resolveValueFromSource;
