/*
 * File: app/model/guardian/GuardianProfileModel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MySchool.model.guardian.GuardianProfileModel', {
	extend: 'Ext.data.Model',

	requires: [
		'Ext.data.Field'
	],

	fields: [
		{
			name: 'id'
		},
		{
			name: 'studentId',
			type: 'int'
		},
		{
			name: 'guardianId',
			type: 'int'
		},
		{
			name: 'guardianprofileviewId',
			type: 'int'
		},
		{
			name: 'type',
			type: 'int'
		},
		{
			name: 'email',
			type: 'string'
		},
		{
			name: 'firstName',
			type: 'string'
		},
		{
			name: 'description',
			type: 'string'
		},
		{
			name: 'lastName',
			type: 'string'
		},
		{
			name: 'middleName',
			type: 'string'
		},
		{
			name: 'phone1',
			type: 'string'
		},
		{
			name: 'phone2',
			type: 'string'
		},
		{
			name: 'address1',
			type: 'string'
		},
		{
			name: 'address2',
			type: 'string'
		},
		{
			name: 'city',
			type: 'string'
		},
		{
			name: 'province',
			type: 'string'
		},
		{
			name: 'postalCode',
			type: 'string'
		},
		{
			name: 'country',
			type: 'string'
		},
		{
			name: 'whoUpdated',
			type: 'string'
		},
		{
			dateFormat: 'm/d/Y',
			name: 'lastUpdated',
			type: 'date'
		},
		{
			dateFormat: 'm/d/Y',
			name: 'dob',
			type: 'date'
		},
		{
			name: 'userName',
			type: 'string'
		},
		{
			name: 'userPassword',
			type: 'string'
		},
		{
			name: 'studentUserName',
			type: 'string'
		},
		{
			name: 'studentEmail',
			type: 'string'
		},
		{
			name: 'enabled',
			type: 'boolean'
		},
		{
			name: 'version',
			type: 'int'
		}
	]
});