# Generated by Django 5.0.1 on 2024-01-23 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0004_room_end_room_result'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='category',
            field=models.CharField(default='food', max_length=10),
        ),
    ]
