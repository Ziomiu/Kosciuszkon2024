from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (EventTypeViewSet, UserViewSet, UserBalanceViewSet,
                    UserBottleDetailsViewSet, MachineEventViewSet,
                    BottlesInAutomatViewSet, BottlesCollectionHistoryViewSet,
                    AddressViewSet, MachineViewSet, LoginView)

router = DefaultRouter()
router.register(r'event-types', EventTypeViewSet)
router.register(r'users', UserViewSet)
router.register(r'user-balances', UserBalanceViewSet)
router.register(r'user-bottle-details', UserBottleDetailsViewSet)
router.register(r'machine-events', MachineEventViewSet)
router.register(r'bottles-in-automat', BottlesInAutomatViewSet)
router.register(r'bottles-collection-history', BottlesCollectionHistoryViewSet)
router.register(r'addresses', AddressViewSet)
router.register(r'machines', MachineViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
]
