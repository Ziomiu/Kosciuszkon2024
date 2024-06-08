# Generated by Django 5.0.6 on 2024-06-08 14:53

import django.db.models.deletion
import django.db.models.functions.datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_machine_addressid_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='home_number',
            new_name='homeNumber',
        ),
        migrations.RenameField(
            model_name='bottlesinautomat',
            old_name='plastic_bottles_limit',
            new_name='plasticBottlesLimit',
        ),
        migrations.RenameField(
            model_name='bottlesinautomat',
            old_name='plastic_bottles_now',
            new_name='plasticBottlesNow',
        ),
        migrations.CreateModel(
            name='BottlesCollectionHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=django.db.models.functions.datetime.Now())),
                ('plasticBottlesCollected', models.IntegerField(default=0)),
                ('machineId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.machine')),
            ],
        ),
    ]