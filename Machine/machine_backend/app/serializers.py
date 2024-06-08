from rest_framework import serializers
from .models import EventType, User, UserBalance, UserBottleDetails


class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBalance
        fields = '__all__'

class UserBottleDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBottleDetails
        fields = '__all__'