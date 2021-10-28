from django.db import models
from companies.models import Company


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    startsAt = models.DateTimeField()
    endsAt = models.DateTimeField()
    registrationLink = models.URLField()
    organizer = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title}, {self.organizer.name}"

    class Meta:
        ordering = ["startsAt"]
