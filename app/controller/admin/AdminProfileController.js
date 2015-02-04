/*
 * File: app/controller/admin/AdminProfileController.js
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

Ext.define('MySchool.controller.admin.AdminProfileController', {
	extend: 'Ext.app.Controller',

	stores: [
		'admin.AdminProfileStore',
		'admin.AdminStore',
		'admin.AdminPasswordStore',
		'security.SecurityStore'
	],

	refs: [
		{
			ref: 'AdminProfileForm',
			selector: '#adminprofileform'
		},
		{
			ref: 'AdminGridPanel',
			selector: '#admingridpanel'
		}
	],

	onAdmingridpanelViewReady: function(tablepanel, eOpts) {
		debugger;
		console.log('onAdmingridpanelViewReady()');
		var myStore = Ext.getStore('admin.AdminProfileStore');

		var securityStore = Ext.getStore('security.SecurityStore');
		var securityRecord = securityStore.getAt(0);
		this.userName = securityRecord.get('userName');
		this.userRole = securityRecord.get('userRole');
		var ss_ = Ext.getStore('student.StudentStore');

		//var studentName_;


		var r_ = ss_.getAt(0);
		var title;
		var myGrid = this.getAdminGridPanel();


		if( this.userRole === 'ROLE_FACULTY' || this.userRole === 'ROLE_SCHOOL'){
			title = this.userName + '/' + this.userRole;


			myGrid.setTitle('[' + title + ']');
			myStore.load({
				callback: this.onMyJsonStoreLoad,
				scope: this,
				params: {
					studentName: this.userName
				}
			});
		}
		else if( this.userRole === 'ROLE_ADMIN'){
			title = this.userName + '/' + this.userRole;


			myGrid.setTitle('[' + title + ']');
			myStore.load({
				callback: this.onMyJsonStoreLoad,
				scope: this
			});
		}
		else{
			//title = r_.get('firstName') + " " + r_.get('middleName') + ' ' + r_.get('lastName');
			title = this.userName + '/' + this.userRole;

			myGrid.setTitle('[' + title + ']' + ' School Admins');
			myStore.load({
				callback: this.onMyJsonStoreLoad,
				scope: this,
				params: {
					studentName: this.userName
				}
			});
		}
		this.gridViewReady = true;
	},

	onAdmingridpanelSelectionChange: function(model, selected, eOpts) {
		debugger;
		// in the onMyJsonStoreLoad we do a deselect so we need to test
		// if selected[0] has a value
		if ( Ext.isDefined( selected  ) && Ext.isDefined( selected[0]  )) {
		    var myForm = this.getAdminProfileForm();

		    this.loadForm( myForm, selected );


		    console.log('onAdmingridpanelSelectionChange()');
		}
	},

	onOnlyadminnewtoolClick: function(tool, e, eOpts) {
		debugger;

		//var guardianStore = Ext.getStore('admin.AdminProfileStore');


		if( this.userRole === 'ROLE_ADMIN' || this.userRole === 'ROLE_SCHOOL'){
			var newDialog = Ext.create( 'MySchool.view.admin.NewDialog' );

			window.console.log( 'New Admin Dialog' );

			newDialog.render( Ext.getBody() );
			newDialog.show();
		}

	},

	onOnlyadminsavetoolClick: function(tool, e, eOpts) {
		window.console.log( "admin.AdminProfileStore.Save" );
		debugger;

		if( this.userRole === 'ROLE_ADMIN' || this.userRole === 'ROLE_SCHOOL'){
			var mystore = Ext.getStore("admin.AdminProfileStore");

			var records = mystore.getModifiedRecords();
			for( var i = 0; i < records.length; i++ )
			{
				records[i].set( 'lastUpdated', new Date() );
				records[i].set( 'whoUpdated', 'login');
			}

			mystore.sync();
		}
	},

	onOnlyadminpasswordtoolClick: function(tool, e, eOpts) {
		debugger;
		//var studentStore				= Ext.getStore('admin.AdminStore');
		//var facultyStore				= Ext.getStore('faculty.FacultyTableStore');
		//var subjectStore				= Ext.getStore('subject.SubjectStore');
		//var commonQuarterSubjectStore	= Ext.getStore( 'common.QuarterSubjectStore');
		//var commonMonthStore			= Ext.getStore('common.MonthStore');

		//var studentRecord	= studentStore.getAt(0);
		//var studentId		= studentRecord.get( 'id' );
		//var studentName		= studentRecord.get( 'userName' );

		if( this.userRole === 'ROLE_ADMIN' || this.userRole === 'ROLE_SCHOOL'){
			var newDialog = Ext.create( 'MySchool.view.admin.PasswordDialog' );

			//newDialog.down('#studentid').setValue( studentId );
			//newDialog.down('#studentname').setValue( studentName );

			//commonQuarterSubjectStore.myLoad();
			//commonMonthStore.myLoad();

			window.console.log( 'Password Dialog' );

			newDialog.render( Ext.getBody() );
			newDialog.show();
		}
	},

	onAdminprofiletabActivate: function(component, eOpts) {
		debugger;
		//subjectsgrid
		// catch the tab activate but only reload if we have processed
		// the viewready indicated by this.gridViewReady
		console.log('tab.activate()');

		if ( Ext.isDefined( this.gridViewReady  ) ) {
		    //var g_ = Ext.ComponentQuery.query("#subjectsgrid")[0];
			var g_ = this.getAdminGridPanel();

		    g_.getStore().reload();
		}

	},

	onOnlyadminrefreshtoolClick: function(tool, e, eOpts) {
		debugger;
		var myStore = Ext.getStore('admin.AdminProfileStore');
		myStore.reload();

	},

	onAdmincancelClick: function(button, e, eOpts) {
		debugger;
		window.console.log( "Cancel New School Admin" );
		var myForm = button.up().getForm();
		myForm.reset();
		button.up().hide();
		button.up().up().close();
	},

	onAdminsubmitClick: function(button, e, eOpts) {
		debugger;
		window.console.log( "Submit New School Admin" );
		var myForm					= button.up().getForm();
		var myPanel					= button.up();
		var myGrid					= this.getAdminGridPanel();

		//Get the values from the form and insert a new record into the AdminProfileStore.

		var formValues				= myForm.getValues();

		//	Create an empty record
		var myRecord	= Ext.create('MySchool.model.admin.PasswordModel');

		//	Get the stores that we will need

		var firstname	= formValues.firstname;
		var middlename	= formValues.middlename;
		var lastname	= formValues.lastname;
		var phone1		= formValues.phone1;
		var phone2		= formValues.phone2;
		var address1	= formValues.address1;
		var address2	= formValues.address2;
		var city		= formValues.city;
		var state		= formValues.state;
		var postalcode	= formValues.postalcode;
		var country		= formValues.country;
		var email		= formValues.email;
		var username	= formValues.username;
		var password	= formValues.password;

		var type		= formValues.combotype;

		var dob			= formValues.dob;


		var myStore		= this.getStore( 'admin.AdminPasswordStore' );

		//debugger;


		myRecord.set( 'id', null );
		//myRecord.set( 'version', null );

		myRecord.set('whoUpdated', 'login');
		myRecord.set('lastUpdated', new Date());
		myRecord.set('email', email );
		myRecord.set('firstName', firstname );
		myRecord.set('middleName', middlename );
		myRecord.set('lastName', lastname);
		myRecord.set('phone1', phone1 );
		myRecord.set('phone2', phone2 );
		myRecord.set('address1', address1);
		myRecord.set('address2', address2);
		myRecord.set('city', city);
		myRecord.set('province', state);
		myRecord.set('postalCode',postalcode);
		myRecord.set('country',country);
		myRecord.set('userName',username);
		myRecord.set('userPassword', password );

		myRecord.set('enabled', true);
		myRecord.set('dob', dob);

		myRecord.set('type', type);

		//add to the store

		myStore.add( myRecord );

		//sync the store.
		myStore.sync();

		myForm.reset();
		button.up().hide();
		button.up().up().close();

		myStore.load({
			callback: this.reloadGrid,
			scope: this
		});

	},

	onAdminprofileformeditbuttonClick: function(button, e, eOpts) {
		debugger;

		if( this.userRole === 'ROLE_ADMIN' || this.userRole === 'ROLE_SCHOOL'){
			var myForm = this.getAdminProfileForm();
			var myFields = myForm.getForm().getFields();
			for( var i = 0; i < myFields.length; i++ )
			{
				myFields.items[i].enable();
			}
			//myForm.getForm().focus();studentprofileformeditbutton
			var cancelButton	= button.up().down('#adminprofileformcanelbutton');
			var saveButton		= button.up().down('#adminprofileformsavebutton');
			cancelButton.enable();
			saveButton.enable();
			button.disable();
		}

	},

	onAdminprofileformcanelbuttonClick: function(button, e, eOpts) {
		var myForm = this.getAdminProfileForm();
		var myFields = myForm.getForm().getFields();
		for( var i = 0; i < myFields.length; i++ )
		{
			myFields.items[i].disable();
		}
		//myForm.getForm().focus();
		//var cancelButton	= button.up().down('#onlyadminrofileformcanelbutton');
		var saveButton		= button.up().down('#adminprofileformsavebutton');
		var editButton		= button.up().down('#adminprofileformeditbutton');
		editButton.enable();
		saveButton.disable();
		button.disable();
	},

	onAdminprofileformsavebuttonClick: function(button, e, eOpts) {
		debugger;
		var myForm = this.getAdminProfileForm();
		var myFields = myForm.getForm().getFields();
		for( var i = 0; i < myFields.length; i++ )
		{
			myFields.items[i].disable();
		}
		//myForm.getForm().focus();
		var cancelButton	= button.up().down('#adminprofileformcanelbutton');
		//var saveButton		= button.up().down('#adminprofileformsavebutton');
		var editButton		= button.up().down('#adminprofileformeditbutton');
		editButton.enable();
		cancelButton.disable();
		button.disable();
		this.saveProfileForm();
	},

	onAdminpasswordcancelbuttonClick: function(button, e, eOpts) {
		debugger;
		window.console.log( "Cancel Admin Password" );
		var myForm = button.up().up().getForm();
		myForm.reset();
		button.up().up().up().hide();
	},

	onAdminpasswordsubmitbuttonClick: function(button, e, eOpts) {
		debugger;
		window.console.log( "Submit School Admin Password" );
		var myForm = button.up().up().getForm();

		var myStore = Ext.getStore("admin.AdminPasswordStore");
		var userName = myForm.findField('userName').getSubmitValue();
		var userPassword = myForm.findField('userPassword').getSubmitValue();
		var userRepeatPassword = myForm.findField('userRepeatPassword').getSubmitValue();
		var myRecord = myStore.findRecord('userName', userName );

		if( myRecord === null )
		{
			Ext.MessageBox.show({
				title: 'INVALID USER EXCEPTION',
				msg: 'You have entered an invalid user.',
				icon: Ext.MessageBox.ERROR,
				buttons: Ext.Msg.OK
			});
		}
		if( userPassword == userRepeatPassword && myRecord !== null )
		{
			myRecord.set( 'userPassword', userPassword );
			myStore.sync();
			//myStore.reload();
		}
		myForm.reset();
		button.up().up().up().hide();
	},

	loadForm: function(form, selected) {
		debugger;

		console.log( form );

		form.loadRecord( selected[0] );

		var myFields = form.getForm().getFields();
		for( var i = 0; i < myFields.length; i++ )
		{
		    myFields.items[i].disable();
		}
		console.log('admin.AdminProfileController.loadForm(): completed');
	},

	onMyJsonStoreLoad: function() {
		//debugger;
		//var g_ = Ext.ComponentQuery.query("#monthlysummarygridpanel")[0];
		var g_ = this.getAdminGridPanel();

		if (g_.getStore().getCount() > 0) {
		    g_.getSelectionModel().deselectAll();
		    g_.getSelectionModel().select( 0 );
		}

		this.gridViewReady = true;
	},

	saveProfileForm: function() {
		debugger;
		window.console.log( "Save Admin Profile Form" );
		//var myForm					= button.up().getForm();
		var myForm = this.getAdminProfileForm();


		//	Get the stores that we will need
		var myStore		= this.getStore( 'admin.AdminProfileStore' );

		//var rForm = myForm.getForm();

		//var formValues1	= myForm.getValues();
		//var formValues	= myForm.getForm().getValues();
		var formFields	= myForm.getForm().getFields();
		//var name	= formFields.items[0].name;
		//var value	= formFields.items[0].lastValue;
		//var test	= this.getFormValue( formFields, 'middleName');
		//debugger;

		//	Create the form record.
		var myRecord	= myForm.getRecord();

		myRecord.set('firstName', this.getFormValue( formFields, 'firstName' ) );
		myRecord.set('middleName', this.getFormValue( formFields, 'middleName' ));
		myRecord.set('lastName', this.getFormValue( formFields, 'lastName' ));
		myRecord.set('phone1', this.getFormValue( formFields, 'phone1' ));
		myRecord.set('phone2', this.getFormValue( formFields, 'phone2' ));
		myRecord.set('address1', this.getFormValue( formFields, 'address1' ));
		myRecord.set('address2', this.getFormValue( formFields, 'address2' ));
		myRecord.set('city', this.getFormValue( formFields, 'city' ));
		myRecord.set('province', this.getFormValue( formFields, 'province' ));
		myRecord.set('postalCode', this.getFormValue( formFields, 'postalCode' ));
		myRecord.set('country', this.getFormValue( formFields, 'country' ));
		myRecord.set('email', this.getFormValue( formFields, 'email' ));
		myRecord.set('dob', this.getFormValue( formFields, 'dob' ));

		myRecord.set('whoUpdated', 'login');
		myRecord.set('lastUpdated', new Date());

		debugger;

		//sync the store.
		myStore.sync();
	},

	getFormValue: function(formFields, name) {
		//var name	= formFields.items[0].name;
		//var value	= formFields.items[0].lastValue;
		for( var i = 0; i < formFields.length; i++ )
		{
		    if( formFields.items[i].name === name )
		    {
		        return formFields.items[i].lastValue;
		    }
		}
		return "";
	},

	reloadGrid: function() {
		var myStore = Ext.getStore('admin.AdminProfileStore');
		myStore.reload();
	},

	init: function(application) {
		this.control({
			"#admingridpanel": {
				viewready: this.onAdmingridpanelViewReady,
				selectionchange: this.onAdmingridpanelSelectionChange
			},
			"#onlyadminnewtool": {
				click: this.onOnlyadminnewtoolClick
			},
			"#onlyadminsavetool": {
				click: this.onOnlyadminsavetoolClick
			},
			"#onlyadminpasswordtool": {
				click: this.onOnlyadminpasswordtoolClick
			},
			"#adminprofiletab": {
				activate: this.onAdminprofiletabActivate
			},
			"#onlyadminrefreshtool": {
				click: this.onOnlyadminrefreshtoolClick
			},
			"#admincancel": {
				click: this.onAdmincancelClick
			},
			"#adminsubmit": {
				click: this.onAdminsubmitClick
			},
			"#adminprofileformeditbutton": {
				click: this.onAdminprofileformeditbuttonClick
			},
			"#adminprofileformcanelbutton": {
				click: this.onAdminprofileformcanelbuttonClick
			},
			"#adminprofileformsavebutton": {
				click: this.onAdminprofileformsavebuttonClick
			},
			"#adminpasswordcancelbutton": {
				click: this.onAdminpasswordcancelbuttonClick
			},
			"#adminpasswordsubmitbutton": {
				click: this.onAdminpasswordsubmitbuttonClick
			}
		});
	}

});
