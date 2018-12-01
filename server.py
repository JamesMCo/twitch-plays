import tornado.ioloop
import tornado.web
import tornado.websocket

connections = []

class WebSocketHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        connections.append(self)
        self.set_nodelay(True)

    def on_message(self, message):
        for connection in connections:
            try:
                connection.write_message(s)
            except Exception as e:
                pass

    def on_close(self):
        to_remove.append(connections.index(self))

    def check_origin(self, origin):
        return True

if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/", WebSocketHandler),
    ])
    app.listen(4312)
    tornado.ioloop.IOLoop.current().start()
