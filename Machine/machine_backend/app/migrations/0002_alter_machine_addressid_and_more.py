# Generated by Django 5.0.6 on 2024-06-08 14:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='addressId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.address'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='bottlesInAutomatId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.bottlesinautomat'),
        ),
    ]