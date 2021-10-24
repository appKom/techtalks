from rest_framework import serializers


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = "__all__"
