from django.contrib.auth.hashers import check_password
from rest_framework import viewsets, status, views
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

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
    @action(detail=False, methods=['get'], url_path='find-by-telephone')
    def find_by_telephone(self, request):
        phone = request.query_params.get('phone', None)
        if phone is not None:
            user = User.objects.filter(phone=phone).first()
            if user is not None:
                serializer = self.get_serializer(user)
                return Response(serializer.data)
            return Response({'detail': 'User not found'}, status=404)
        return Response({'detail': 'Phone number is required'}, status=400)

class UserBalanceViewSet(viewsets.ModelViewSet):
    queryset = UserBalance.objects.all()
    serializer_class = UserBalanceSerializer

class UserBottleDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserBottleDetails.objects.all()
    serializer_class = UserBottleDetailsSerializer

class MachineViewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer


class LoginView(views.APIView):
    def post(self, request, *args, **kwargs):
        phone = request.data.get('phone')
        password = request.data.get('password')

        try:
            user = User.objects.get(phone=phone)
        except User.DoesNotExist:
            return Response({'error': 'Invalid phone or password'}, status=status.HTTP_401_UNAUTHORIZED)

        if not check_password(password, user.password):
            return Response({'error': 'Invalid phone or password'}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)