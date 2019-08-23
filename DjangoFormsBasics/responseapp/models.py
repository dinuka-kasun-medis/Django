from django.db import models


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    f_name = models.CharField(max_length=200)
    l_name = models.CharField(max_length=200)
    age = models.IntegerField()
    objects = models.Manager()


    def __str__(self): 
        return self.f_name