import colorama, json
from python_twitch_irc import TwitchIrc
from websocket import create_connection

config = {}
ws_server = None

game_controls = {
                 "l":      "l",
                 "left":   "l",
                 "r":      "r",
                 "right":  "r",
                 "d":      "d",
                 "down":   "d",
                 "drop":   "d",
                 "u":      "u",
                 "up":     "u",
                 "rotate": "u",
                 "spin":   "u",
                 "c":      "c",
                 "swap":   "c"
                }

class TwitchPlays(TwitchIrc):
    def on_connect(self):
        print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}CHAT{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Connecting to {colorama.Fore.CYAN}{config['channel']}{colorama.Fore.RESET}")
        self.join(config["channel"])

    def on_message(self, timestamp, tags, channel, user, message):
        if message.lower() in game_controls:
            print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}CHAT{colorama.Fore.RESET}] {colorama.Fore.CYAN}{user}{colorama.Fore.RESET} -> {game_controls[message.lower()]}")
            ws_server.send(game_controls[message.lower()])

def main():
    global ws_server

    colorama.init()

    print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}CHAT{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Loading {colorama.Fore.GREEN}config{colorama.Fore.YELLOW}....{colorama.Fore.RESET}")
    
    with open("config.json") as f:
        config_file = json.loads(f.read())
    config["channel"]  = "#" + config_file["channel"]
    config["username"] = config_file["botname"]
    config["token"] = config_file["oauth"]
    
    print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}CHAT{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Connecting to {colorama.Fore.CYAN}WebSocket server{colorama.Fore.YELLOW}...{colorama.Fore.RESET}")
    ws_server = create_connection("ws://localhost:80")

    print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}CHAT{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Connecting to {colorama.Fore.MAGENTA}Twitch{colorama.Fore.YELLOW}...{colorama.Fore.RESET}")
    bot = TwitchPlays(config["username"], config["token"])
    bot.start()
    bot.handle_forever()

if __name__ == "__main__":
    main()