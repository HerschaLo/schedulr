# Generated by Django 4.0 on 2022-11-24 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_remove_tpersonalevent_timeslot_id_tstudent_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tcourseevent',
            name='course_event_type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]