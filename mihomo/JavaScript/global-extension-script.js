function main(config, profileName) {
  const urls = {
    subscription_1: "真实机场订阅链接",
    subscription_2: "真实机场订阅链接",
  };

  for (let key of Object.keys(urls)) {
    if (
      config["proxy-providers"][key] &&
      config["proxy-providers"][key].url === "你的机场订阅链接！！！"
    ) {
      config["proxy-providers"][key].url = urls[key];
    }
  }

  return config;
}
