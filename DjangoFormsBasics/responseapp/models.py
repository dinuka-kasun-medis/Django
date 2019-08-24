from django.db import models

class Customer(models.Model):
    # id = models.AutoField(primary_key=True)
    nic = models.CharField(max_length=12,primary_key=True)
    email = models.CharField(max_length=200,unique=True,default=None)
    f_name = models.CharField(max_length=200)
    l_name = models.CharField(max_length=200)
    age = models.IntegerField()
    objects = models.Manager()




class Data(models.Model):
    mobile = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    data = models.ForeignKey(Customer, on_delete=models.CASCADE, default=None)
    objects = models.Manager()
    
