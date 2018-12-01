import colorama
import tornado.ioloop
import tornado.web
import tornado.websocket

connections = []

class WebSocketHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        global connections

        print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}SRVR{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Opened new connection...{colorama.Fore.RESET}")
        connections.append(self)
        self.set_nodelay(True)

    def on_message(self, message):
        global connections

        print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}SRVR{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Recieved (and broadcasting) new message...{colorama.Fore.RESET}")
        for connection in connections:
            try:
                connection.write_message(message)
            except Exception as e:
                print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}SRVR{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Had an exception while sending message: {colorama.Fore.RESET} {e}")

    def on_close(self):
        print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}SRVR{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Closing a connection...{colorama.Fore.RESET}")

    def check_origin(self, origin):
        return True

if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/", WebSocketHandler),
    ])
    app.listen(80)
    print(f"{colorama.Fore.RESET}[{colorama.Fore.RED}SRVR{colorama.Fore.RESET}] {colorama.Fore.YELLOW}Starting WebSocket server...{colorama.Fore.RESET}")
    tornado.ioloop.IOLoop.current().start()
