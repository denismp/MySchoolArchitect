/*
 * File: app/model/weekly/SkillRatingsModel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('MySchool.model.weekly.SkillRatingsModel', {
	extend: 'Ext.data.Model',
	alias: 'model.weeklyskillratingsmodel',

	requires: [
		'Ext.data.Field'
	],

	fields: [
		{
			name: 'id'
		},
		{
			name: 'weeklyskillId',
			type: 'int'
		},
		{
			name: 'week_month',
			type: 'int'
		},
		{
			name: 'week_number',
			type: 'int'
		},
		{
			name: 'remembering',
			type: 'int'
		},
		{
			name: 'understanding',
			type: 'int'
		},
		{
			name: 'applying',
			type: 'int'
		},
		{
			name: 'analyzing',
			type: 'int'
		},
		{
			name: 'evaluating',
			type: 'int'
		},
		{
			name: 'creating',
			type: 'int'
		},
		{
			name: 'comments',
			type: 'string'
		},
		{
			name: 'locked',
			type: 'boolean'
		},
		{
			dateFormat: 'm/d/Y',
			name: 'lastUpdated',
			type: 'date'
		},
		{
			name: 'whoUpdated',
			type: 'string'
		},
		{
			name: 'qtrId',
			type: 'int'
		},
		{
			name: 'qtrName',
			type: 'string'
		},
		{
			name: 'qtrYear',
			type: 'int'
		},
		{
			name: 'studentId',
			type: 'int'
		},
		{
			name: 'studentUserName',
			type: 'string'
		},
		{
			name: 'facultyUserName',
			type: 'string'
		},
		{
			name: 'subjId',
			type: 'int'
		},
		{
			name: 'subjName',
			type: 'string'
		},
		{
			name: 'version',
			type: 'int'
		}
	]
});