from rest_framework import viewsets
from .models import  EventType, User, UserBalance, UserBottleDetails
from .serializers import  EventTypeSerializer, UserSerializer, UserBalanceSerializer, UserBottleDetailsSerializer


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