from django.db import models

# Create your models here.

class FilterDetails(models.Model):
    details = models.CharField(max_length=300, blank=True, primary_key=True)
    id = models.ForeignKey('FilterEmployee', models.DO_NOTHING, db_column='id', blank=True)
    objects = models.Manager()

    class Meta:
        managed = False
        db_table = 'filter_details'


class FilterEmployee(models.Model):
    id = models.IntegerField(primary_key=True)
    nic = models.CharField(max_length=12, blank=True, null=True)
    f_name = models.CharField(max_length=200, blank=True, null=True)
    l_name = models.CharField(max_length=200, blank=True, null=True)
    salary = models.IntegerField( null=False)
    objects = models.Manager()

    class Meta:
        managed = False
        db_table = 'filter_employee'