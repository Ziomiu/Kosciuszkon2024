from rest_framework import viewsets
from .models import MachineEvent, BottlesInAutomat, BottlesCollectionHistory, Address, EventType, User, UserBalance, UserBottleDetails, Machine
from .serializers import (MachineEventSerializer, BottlesInAutomatSerializer,
                          BottlesCollectionHistorySerializer, AddressSerializer,
                          EventTypeSerializer, UserSerializer, UserBalanceSerializer,
                          UserBottleDetailsSerializer, MachineSerializer)

class MachineEventViewSet(viewsets.ModelViewSet):
    queryset = MachineEvent.objects.all()
    serializer_class = MachineEventSerializer

class BottlesInAutomatViewSet(viewsets.ModelViewSet):
    queryset = BottlesInAutomat.objects.all()
    serializer_class = BottlesInAutomatSerializer

class BottlesCollectionHistoryViewSet(viewsets.ModelViewSet):
    queryset = BottlesCollectionHistory.objects.all()
    serializer_class = BottlesCollectionHistorySerializer

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class EventTypeViewSet(viewsets.ModelViewSet):
    queryset = EventType.objects.all()
    serializer_class = EventTypeSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserBalanceViewSet(viewsets.ModelViewSet):
    queryset = UserBalance.objects.all()
    serializer_class = UserBalanceSerializer

class UserBottleDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserBottleDetails.objects.all()
    serializer_class = UserBottleDetailsSerializer

class MachineViewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
