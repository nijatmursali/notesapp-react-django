from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import notes.routing

application = ProtocolTypeRouter({
    # something
    "websocket": AuthMiddlewareStack(
        URLRouter(
            notes.routing.websocket_urlpatterns
        )
    )
})
