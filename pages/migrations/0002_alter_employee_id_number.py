# Generated by Django 4.2.1 on 2023-05-21 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='id_number',
            field=models.IntegerField(),
        ),
    ]
