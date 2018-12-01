import colorama, json
from python_twitch_irc import TwitchIrc

config = {}

class TwitchPlays(TwitchIrc):
    def on_connect(self):
        print(f"{colorama.Fore.YELLOW}Connecting to {colorama.Fore.CYAN}{config['channel']}{colorama.Fore.RESET}")
        self.join(config["channel"])

    def on_message(self, timestamp, tags, channel, user, message):
        print(f"<{colorama.Fore.CYAN}{user}{colorama.Fore.RESET}> {message}")

def main():
    colorama.init()

    print(f"{colorama.Fore.YELLOW}Loading {colorama.Fore.GREEN}config{colorama.Fore.YELLOW}....{colorama.Fore.RESET}")
    
    with open("config.json") as f:
        config_file = json.loads(f.read())
    config["channel"]  = "#" + config_file["channel"]
    config["username"] = config_file["botname"]
    config["token"] = config_file["oauth"]
    

    print(f"{colorama.Fore.YELLOW}Connecting to {colorama.Fore.MAGENTA}Twitch{colorama.Fore.YELLOW}...{colorama.Fore.RESET}")
    bot = TwitchPlays(config["username"], config["token"])
    bot.start()
    bot.handle_forever()

if __name__ == "__main__":
    main()