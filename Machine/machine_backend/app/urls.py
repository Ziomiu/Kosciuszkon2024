from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventTypeViewSet, UserViewSet, UserBalanceViewSet, UserBottleDetailsViewSet

router = DefaultRouter()
router.register(r'event-types', EventTypeViewSet)
router.register(r'users', UserViewSet)
router.register(r'user-balances', UserBalanceViewSet)
router.register(r'user-bottle-details', UserBottleDetailsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]