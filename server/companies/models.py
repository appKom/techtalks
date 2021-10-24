from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    logo = models.ImageField()

    class Meta:
        ordering = ["name"]
