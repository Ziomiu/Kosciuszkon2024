from rest_framework import serializers
from .models import MachineEvent, BottlesInAutomat, BottlesCollectionHistory, Address, EventType, User, UserBalance, UserBottleDetails, Machine

# Define your serializers here
class MachineEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineEvent
        fields = '__all__'
        read_only_fields = ('eventTime',)

    def create(self, validated_data):
        machine_event = MachineEvent.objects.create(**validated_data)

        event_type = validated_data.get('eventType')
        machine_id = validated_data.get('machineId')
        if event_type == EventType.DEPOSIT_BOTTLE:
            bottles_in_automat = BottlesInAutomat.objects.filter(machine_id=machine_id).first()
            bottles_in_automat.deposit_amount +=1




        elif event_type == EventType.WITHDRAW_ALL:
            log_message = f"Machine event {machine_event.id} stopped."

        return machine_event


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
    address = AddressSerializer(write_only=True)
    address_data = AddressSerializer(source='addressId', read_only=True)
    bottles_in_automat_data = BottlesInAutomatSerializer(source='bottlesInAutomatId', read_only=True)
    class Meta:
        model = Machine
        fields = '__all__'
        read_only_fields = ('addressId','bottlesInAutomatId')

    def create(self, validated_data):
        address_data = validated_data.pop('address')

        address = Address.objects.create(**address_data)
        bottles_in_automat = BottlesInAutomat.objects.create()

        machine = Machine.objects.create(addressId=address, bottlesInAutomatId=bottles_in_automat, **validated_data)
        return machine
