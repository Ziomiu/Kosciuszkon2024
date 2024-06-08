from django.db import models
from django.db.models.functions import Now


# Create your models here.

# class MachineEvent(models.Model):
#     userId = models.ForeignKey('User', on_delete=models.PROTECT)
#     machineId = models.ForeignKey('Machine', on_delete=models.PROTECT)
#     eventType = models.ForeignKey('EventType', on_delete=models.PROTECT)
#     eventTime = models.DateTimeField(db_default=Now())

class EventType(models.Model):
    eventDescription = models.CharField(max_length=200)

class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    userBalanceId = models.ForeignKey('UserBalance', on_delete=models.CASCADE)
    userBottleDetailsId = models.ForeignKey('UserBottleDetails', on_delete=models.CASCADE)


class UserBalance(models.Model):
    balance = models.DecimalField(max_digits=10, decimal_places=2)


class UserBottleDetails(models.Model):
    depositedBottles = models.IntegerField(default=0)
