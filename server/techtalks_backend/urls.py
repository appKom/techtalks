from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from companies.views import CompanyViewSet
from events.views import EventViewSet

router = DefaultRouter()

router.register(r"companies", CompanyViewSet)
router.register(r"events", EventViewSet)

urlpatterns = [path("admin/", admin.site.urls), path("", include(router.urls))]
