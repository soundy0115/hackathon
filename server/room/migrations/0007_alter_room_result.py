# Generated by Django 5.0.1 on 2024-01-23 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0006_room_answered_count'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='result',
            field=models.CharField(default='[]', max_length=10000),
        ),
    ]
