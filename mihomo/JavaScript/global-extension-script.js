function main(config, profileName) {
  const subscriptions = [
    {
      url: "真实机场订阅链接",
      name: "订阅一",
    },
    {
      url: "真实机场订阅链接",
      name: "订阅二",
    },
  ];

  if (!config["proxy-providers"]) {
    config["proxy-providers"] = {};
  }

  const providerTemplate = config["provider-template"] || {
    type: "http",
    proxy: "DIRECT",
    interval: 1800,
    "health-check": {
      enable: true,
      url: "https://www.gstatic.com/generate_204",
      interval: 300,
    },
  };

  subscriptions.forEach((subscription, index) => {
    const subscriptionKey = `subscription_${index + 1}`;
    const providerConfig = JSON.parse(JSON.stringify(providerTemplate));
    providerConfig.url = subscription.url;
    providerConfig.override = {
      "additional-prefix": `[${subscription.name}]`,
    };
    config["proxy-providers"][subscriptionKey] = providerConfig;
  });

  return config;
}
