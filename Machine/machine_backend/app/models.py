from django.db import models
from django.db.models.functions import Now
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.

class EventType(models.TextChoices):
    DEPOSIT_BOTTLE = 'DEPOSIT_BOTTLE'
    WITHDRAW_ALL = 'WITHDRAW_ALL'

class MachineEvent(models.Model):
    userId = models.ForeignKey('User', on_delete=models.PROTECT)
    machineId = models.ForeignKey('Machine', on_delete=models.PROTECT)
    eventType = models.CharField(max_length=20, choices=EventType.choices)
    eventTime = models.DateTimeField(db_default=Now())


class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    password = models.CharField(max_length=128)
    userBalanceId = models.ForeignKey('UserBalance', on_delete=models.CASCADE)
    userBottleDetailsId = models.ForeignKey('UserBottleDetails', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(User, self).save(*args, **kwargs)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return f"{self.name}  {self.surname}"


class UserBalance(models.Model):
    balance = models.DecimalField(max_digits=10, decimal_places=2)

class UserBottleDetails(models.Model):
    depositedBottles = models.IntegerField(default=0)

class Address(models.Model):
    city = models.CharField()
    street = models.CharField()
    homeNumber = models.CharField()
    latitude = models.DecimalField(decimal_places = 7, max_digits = 10)
    longitude = models.DecimalField(decimal_places = 7, max_digits = 10)

class BottlesInAutomat(models.Model):
    plasticBottlesNow = models.IntegerField(
        default = 0
    )
    plasticBottlesLimit = models.IntegerField(
        default = 50
    )

class Machine(models.Model):
    addressId = models.ForeignKey(
        Address,
        on_delete = models.CASCADE,
        null = True
    )
    bottlesInAutomatId = models.ForeignKey(
        BottlesInAutomat,
        on_delete = models.CASCADE,
        null = True
    )

class BottlesCollectionHistory(models.Model):
    machineId = models.ForeignKey(
        Machine,
        on_delete = models.PROTECT,
        null = False
    )
    date = models.DateTimeField(
        default = Now()
    )
    plasticBottlesCollected = models.IntegerField(
        default = 0
    )