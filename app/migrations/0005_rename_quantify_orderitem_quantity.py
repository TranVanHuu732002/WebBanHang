# Generated by Django 4.1.7 on 2023-05-09 14:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_rename_oder_order_rename_oderitem_orderitem_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='quantify',
            new_name='quantity',
        ),
    ]
