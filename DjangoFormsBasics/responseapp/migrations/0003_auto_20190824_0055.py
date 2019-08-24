# Generated by Django 2.2 on 2019-08-24 07:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('responseapp', '0002_auto_20190824_0019'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='data',
        ),
        migrations.AddField(
            model_name='data',
            name='data',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='responseapp.Customer'),
        ),
    ]
