from rest_framework import serializers
from .models import MachineEvent, BottlesInAutomat, BottlesCollectionHistory, Address, EventType, User, UserBalance, UserBottleDetails, Machine

# Define your serializers here
class MachineEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineEvent
        fields = '__all__'
        read_only_fields = ('eventTime',)


class BottlesInAutomatSerializer(serializers.ModelSerializer):
    class Meta:
        model = BottlesInAutomat
        fields = '__all__'
        read_only_fields = ('plasticBottlesNow','plasticBottlesLimit')

class BottlesCollectionHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BottlesCollectionHistory
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = '__all__'


class UserBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBalance
        fields = '__all__'
        read_only_fields = ('balance',)

class UserBottleDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBottleDetails
        fields = '__all__'
        read_only_fields = ('depositedBottles',)


class UserSerializer(serializers.ModelSerializer):
    userBalanceId = UserBalanceSerializer(read_only=True)
    userBottleDetailsId = UserBottleDetailsSerializer(read_only=True)

    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('userBalanceId', 'userBottleDetailsId')

    def create(self, validated_data):
        user_balance = UserBalance.objects.create(balance=0.00)
        user_bottle_details = UserBottleDetails.objects.create(depositedBottles=0)

        user = User.objects.create(
            userBalanceId=user_balance,
            userBottleDetailsId=user_bottle_details,
            **validated_data
        )
        return user

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = '__all__'
