/*
 * File: app/controller/bodiesofwork/MyController.js
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

Ext.define('MySchool.controller.bodiesofwork.MyController', {
	extend: 'Ext.app.Controller',
	alias: 'controller.bodiesofworkcontroller',

	models: [
		'bodiesofwork.BodiesOfWorkModel'
	],
	stores: [
		'bodiesofwork.MyJsonStore',
		'subject.SubjectStore'
	],
	views: [
		'bodiesofwork.GridPanel'
	],

	refs: [
		{
			ref: 'BodiesOfWorkWhatTabPanel',
			selector: '#bodiesofworkwhattabpanel'
		},
		{
			ref: 'BodiesOfWorkDescriptionTabPanel',
			selector: '#bodiesofworkdescriptiontabpanel'
		},
		{
			ref: 'BodiesOfWorkObjectiveTabPanel',
			selector: '#bodiesofworkobjectivetabpanel'
		},
		{
			ref: 'BodiesOfWorkGridPanel',
			selector: '#bodiesofworkssubjectsgrid'
		}
	],

	onBodiesofworkssubjectsgridViewReady: function(tablepanel, eOpts) {
		debugger;
		console.log('onBodiesofworkssubjectsgridViewReady()');
		var bws_ = Ext.getStore('bodiesofwork.MyJsonStore');
		var ss_ = Ext.getStore('student.StudentStore');
		var securityStore = Ext.getStore( 'security.SecurityStore');
		var securityRecord = securityStore.getAt(0);
		this.userName = securityRecord.get('userName');
		this.userRole = securityRecord.get('userRole');
		var studentName_;
		var g_ = Ext.ComponentQuery.query("#bodiesofworkssubjectsgrid")[0];

		var r_ = ss_.getAt(0);
		//        debugger
		if ( typeof( r_ ) !== "undefined" )
		{
			if( this.userRole !== "ROLE_USER")
			{
				studentName_ = this.userName + '/' + this.userRole;
				g_.setTitle( '[' + studentName_  + ']');
				bws_.load({
					callback: this.onMyJsonStoreLoad,
					scope: this
				});
			}
			else
			{
				studentName_ = r_.get('firstName') + " " + r_.get('middleName') + ' ' + r_.get('lastName');

				g_.setTitle('[' + studentName_ + '] Bodies Of Work');
				bws_.load({
					callback: this.onMyJsonStoreLoad,
					scope: this,
					params: {
						studentName: r_.get('userName'),
						studentId: r_.get('studentId')
					}
				});
			}
		}
		else
		{
			studentName_ = this.userName + '/' + this.userRole;
			g_.setTitle('[' + studentName_ + ']');
			myStore.load({
				callback: this.onMyJsonStoreLoad,
				studentName: this.userName,
				scope: this
			});
		}
		//grid.getSelectionModel().select( 0 );
		//tablepanel.getSelectionModel().select( 0 );

	},

	onBodiesofworkssubjectsgridSelectionChange: function(model, selected, eOpts) {
		//debugger;
		// in the onMyJsonStoreLoad we do a deselect so we need to test
		// if selected[0] has a value
		if ( Ext.isDefined( selected  ) && Ext.isDefined( selected[0]  )) {
		    this.loadTabPanelForm( this.getBodiesOfWorkWhatTabPanel(), selected, 'what' );
		    this.loadTabPanelForm( this.getBodiesOfWorkDescriptionTabPanel(), selected, 'description' );
		    this.loadTabPanelForm( this.getBodiesOfWorkObjectiveTabPanel(), selected, 'objective' );

		    console.log('onBodiesofworssubjectsgridSelectionChange()');
		}

	},

	onBodyofworkformBoxReady: function(component, width, height, eOpts) {
		//debugger;
		console.log('onBodyofworkformBoxReady()');
	},

	onBodiesofworkstabActivate: function(component, eOpts) {
		debugger;
		// catch the tab activate but only reload if we have processed
		// the viewready indicated by this.gridViewReady
		console.log('#bodiesofworkstab.activate()');

		if ( Ext.isDefined( this.gridViewReady  ) ) {
		    var g_ = Ext.ComponentQuery.query("#bodiesofworkssubjectsgrid")[0];

		    g_.getStore().reload();
		}

	},

	onToolrefreshbodiesofworkClick: function(tool, e, eOpts) {
		//debugger;
		window.console.log( 'Refresh' );
		var mystore = Ext.getStore("bodiesofwork.MyJsonStore");
		var myGrid = this.getBodiesOfWorkGridPanel();
		myGrid.removeAll();
		mystore.reload();

	},

	onToolsearchbodiesofworkClick: function(tool, e, eOpts) {

	},

	onToolnewbodiesofworkClick: function(tool, e, eOpts) {
		debugger;
		var qs_ = Ext.getStore('subject.SubjectStore');
		var recCnt_ = qs_.getTotalCount();

		if (recCnt_ < 1)
		{
		    Ext.MessageBox.show({
		        title : 'Body of Work Exception',
		        msg : 'Subjects by Student is empty, please add a record there first.',
		        icon : Ext.MessageBox.ERROR,
		        buttons : Ext.Msg.OK
		    });

		    return;
		}

		var newDialog	= Ext.create( 'MySchool.view.bodiesofwork.NewForm' );
		var bws			= Ext.getStore('bodiesofwork.MyJsonStore');
		var ss			= Ext.getStore('student.StudentStore');
		var r_;
		var studentName_ = newDialog.down('#newbodiesofworkform-studentName');
		var qsCB_		= newDialog.down('#newbodiesofworkform-quarter');

		if( this.userRole === 'ROLE_USER' )
			return;

		if( bws.count() > 0 )
		{
			r_ = bws.getAt( this.selectedIndex );
		}

		if( typeof r_ !== 'undefined' )
		{
			var studentRecord = ss.getAt(0);
			var sName = studentRecord.get('userName');
			studentName_.setValue(sName);
		}
		else
		{
			// This is the first time.
			if( this.userRole === 'ROLE_USER' )
			{
				//var record = ss.findRecord( 'userName', this.userName );
				studentName_.setValue( this.userName );
			}
			else
			{
				studentName_.setValue( "Select one." );
			}
		}
		if( this.userRole !== 'ROLE_USER')
		{
			studentName_.setReadOnly( false );
		}
		else
		{
			studentName_.setReadOnly( true );
		}
		var commonQuarterSubjectStore	= Ext.getStore( 'common.QuarterSubjectStore');
		commonQuarterSubjectStore.myLoad();  // Added by Denis Putnam

		if (r_ === null)
		{
		    r_ = bws_.getAt(0);
		}
		if( false )
		{
		//if (r_) {
		    var qtrId_ = r_.get('qtrId');
		    var subjId_ = r_.get('subjId');

		    newDialog.loadRecord(r_);

		    //for( var i_ = 0; i_ < recCnt_; i_++ ) {
		    //    r_ = qs_.getAt(i_);
		    //    if (r_ !== null && qtrId_ == r_.get('qtrId') && subjId_ == r_.get('subjId')) {
		    //        qsCB_.setValue(r_.get('id'));
		    //        qsCB_.setDisabled(true);
		    //        break;
		    //    }
		    //}
		}
		else
		{
			// no body of works records in database
		    //var b_ = newDialog.down('#newbodiesofworkcreate');
		    var workName_ = newDialog.down('#newbodiesofworkform-workName');
		    var what_ = newDialog.down('#newbodiesofworkform-what');
		    var desc_ = newDialog.down('#newbodiesofworkform-description');
		    var obj_ = newDialog.down('#newbodiesofworkform-objective');

		    //b_.setDisabled(true);
		    qsCB_.setValue(qs_.getAt(0).get('id'));
		    workName_.setValue("replace_me_with_name");
		    what_.setValue("replace_me_with_what");
		    desc_.setValue("replace_me_with_description");
		    obj_.setValue("replace_me_with_objectives");
		}

		window.console.log( 'New' );
		newDialog.render( Ext.getBody() );
		newDialog.show();

	},

	onToolsavebodiesofworkClick: function(tool, e, eOpts) {

	},

	onTooldeletebodiesofworkClick: function(tool, e, eOpts) {

	},

	onToollockbodiesofworkClick: function(tool, e, eOpts) {

	},

	onNewbodiesofworkcancelClick: function(button, e, eOpts) {
		var bId_ = button.getItemId();
		var newDialog = button.up('#newbodiesofworkform');
		var myForm = newDialog.getForm();
		var formValues = myForm.getValues();
		var hide_ = true;
		var okToSync_ = false;
		//debugger;
		if (bId_.indexOf("cancel") < 0)
		{
		    //debugger;
		    var qsCB_ = newDialog.down('#newbodiesofworkform-quarter');

		    if (bId_.indexOf("submit") > 0)
		    {
		        //if (newDialog.down('#newbodiesofworkcreate').isDisabled())
		        if( true )
		        {
		            var r_;
		            var qsId_ = qsCB_.getValue();

		            if (qsId_ === null)
		            {
		                Ext.MessageBox.show({
		                    title : 'Submit Exception',
		                    msg : 'You must pick a Quarter and Subject.',
		                    icon : Ext.MessageBox.ERROR,
		                    buttons : Ext.Msg.OK
		                });
		            }
		            else
		            {
		                //Ext.MessageBox.show({
		                //    title : 'Submit BOW',
		                //    msg : 'CREATE',
		                //    icon : Ext.MessageBox.ERROR,
		                //    buttons : Ext.Msg.OK
		                //});
		                // create an empty model record to add to the store.
		                var bodyOfWorkRecord = Ext.create( 'MySchool.model.bodiesofwork.BodiesOfWorkModel' );

		                // get the store.
		                var myStore = Ext.getStore('bodiesofwork.MyJsonStore');

		                debugger;
		                // get the qtrName, subjName, qtrId, and subjId from the combo-box.
		                var subjectStore			= Ext.getStore( 'subject.SubjectStore' );
		                var quarterSubjectId		= formValues.comboquartersubject;
		                var quarterSubjectRecord;
		                for( var i = 0; i < subjectStore.count(); i++ )
		                {
		                    if( subjectStore.getAt(i).get('id') === quarterSubjectId )
		                    {
		                        quarterSubjectRecord = subjectStore.getAt(i);
		                        break;
		                    }
		                }

						debugger;

		                // collect the data from the form.
		                var studentName = myForm.findField('studentUserName').getSubmitValue();
		                var workName	= myForm.findField('workName').getSubmitValue();
		                var what		= myForm.findField('what').getSubmitValue();
		                var description	= myForm.findField('description').getSubmitValue();
		                var objective	= myForm.findField('objective').getSubmitValue();
		                //var subjId		= myForm.findField('subjId').getSubmitValue();
		                var subjId		= quarterSubjectRecord.get('subjId');
		                //var qtrId		= myForm.findField('qtrId').getSubmitValue();
		                var qtrId		= quarterSubjectRecord.get('qtrId');
		                //var qtrYear		= myForm.findField('qtrYear').getSubmitValue();
		                var qtrYear		= quarterSubjectRecord.get('qtrYear');
		                //var qtrName		= myForm.findField('qtrName').getSubmitValue();
		                var qtrName		= quarterSubjectRecord.get('qtrName');
		                var studentId	= myForm.findField('studentId').getSubmitValue();
		                //var subjName	= myForm.findField('subjName').getSubmitValue();
		                var subjName	= quarterSubjectRecord.get('subjName');
		                var subjGradeLevel	= myForm.findField('subjGradeLevel').getSubmitValue();
		                var subjCreditHours	= myForm.findField('subjCreditHours').getSubmitValue();
		                var whoUpdated	= 'login';
		                var lastUpdated	= new Date();
		                //bodyOfWorkRecord.set('', qsId_);
		                bodyOfWorkRecord.set('studentUserName', studentName );
		                bodyOfWorkRecord.set('workName', workName );
		                bodyOfWorkRecord.set('what', what );
		                bodyOfWorkRecord.set('description', description );
		                bodyOfWorkRecord.set('objective', objective );
		                // Next we need the subjId, qtrId, qtrYear, qtrName, gradeLevel, creditHours, whoUpdated, and lastUpdated.
		                bodyOfWorkRecord.set('subjId', subjId );
		                bodyOfWorkRecord.set('qtrId', qtrId );
		                bodyOfWorkRecord.set('qtrYear', qtrYear );
		                bodyOfWorkRecord.set('qtrName', qtrName );
		                bodyOfWorkRecord.set('studentId', studentId );
		                bodyOfWorkRecord.set('subjName', subjName );
		                //bodyOfWorkRecord.set('', version );
		                bodyOfWorkRecord.set('subjGradeLevel', subjGradeLevel );
		                bodyOfWorkRecord.set('subjCreditHours', subjCreditHours );
		                bodyOfWorkRecord.set('whoUpdated', whoUpdated );
		                bodyOfWorkRecord.set('lastUpdated', lastUpdated );

		                // add the record to the store.
		                myStore.add(bodyOfWorkRecord);

		                // sync it to the store
		                myStore.sync();
		            }
		        }
		        else
		        {
		            var r_ = myForm.getRecord();
		            myForm.updateRecord(r_);
		            //Ext.MessageBox.show({
		            //    title : 'Submit BOW',
		            //    msg : 'UPDATE',
		            //    icon : Ext.MessageBox.ERROR,
		            //    buttons : Ext.Msg.OK
		            //});
		            //r_.set('whoUpdated', 'login');
		            //r_.set('lastUpdate', new Date() );

		            // get the store.
		            //var myStore = Ext.getStore('bodiesofwork.MyJsonStore');
		            //myStore.sync();
		        }
		    }
		    else
		    {
		        //var b_ = newDialog.down('#newbodiesofworkcreate');
		        var submitButton = newDialog.down('#newbodiesofworksubmit');
		        var workName_ = newDialog.down('#newbodiesofworkform-workName');
		        var what_ = newDialog.down('#newbodiesofworkform-what');
		        var desc_ = newDialog.down('#newbodiesofworkform-description');
		        var obj_ = newDialog.down('#newbodiesofworkform-objective');

		        //b_.setDisabled(true);
		        //submitButton.setDisabled(false);
		        qsCB_.setDisabled(false);
		        hide_ = false;

		        workName_.setValue("replace_me_with_name");
		        workName_.setDisabled(false);
		        what_.setValue("replace_me_with_what");
		        desc_.setValue("replace_me_with_description");
		        obj_.setValue("replace_me_with_objectives");
		    }
		}

		if (hide_)
		{
		    myForm.reset();
		    button.up().hide();
		}
	},

	onNewbodiesofworksubmitClick: function(button, e, eOpts) {
		    this.onNewbodiesofworkcancelClick(button, e, eOpts);
	},

	onNewbodiesofworkcreateClick: function(button, e, eOpts) {
		    this.onNewbodiesofworkcancelClick(button, e, eOpts);
	},

	onBodiesofworkssubjectsgridSelect: function(rowmodel, record, index, eOpts) {
		    window.console.log( "selected row in grid." );
		    window.console.log( "index=" + index );
		    this.selectedIndex = index;
	},

	init: function(application) {
				this.selectedIndex = 0;

				this.control({
					"#editbodiesofworkwhattabpanel": {
						click: this.buttonHandler
					},
					"#editbodiesofworkdescriptiontabpanel": {
						click: this.buttonHandler
					},
					"#editbodiesofworkobjectivetabpanel": {
						click: this.buttonHandler
					},
					"#bodiesofworkwhattabpaneltextbox": {
						blur: this.blurHandler
					},
					"#bodiesofworkdescriptiontabpaneltextbox": {
						blur: this.blurHandler
					},
					"#bodiesofworkobjectivetabpaneltextbox": {
						blur: this.blurHandler
					}

				});

		this.control({
			"#bodiesofworkssubjectsgrid": {
				viewready: this.onBodiesofworkssubjectsgridViewReady,
				selectionchange: this.onBodiesofworkssubjectsgridSelectionChange,
				select: this.onBodiesofworkssubjectsgridSelect
			},
			"#bodyofworkform": {
				boxready: this.onBodyofworkformBoxReady
			},
			"#bodiesofworkstab": {
				activate: this.onBodiesofworkstabActivate
			},
			"#toolrefreshbodiesofwork": {
				click: this.onToolrefreshbodiesofworkClick
			},
			"#toolsearchbodiesofwork": {
				click: this.onToolsearchbodiesofworkClick
			},
			"#toolnewbodiesofwork": {
				click: this.onToolnewbodiesofworkClick
			},
			"#toolsavebodiesofwork": {
				click: this.onToolsavebodiesofworkClick
			},
			"#tooldeletebodiesofwork": {
				click: this.onTooldeletebodiesofworkClick
			},
			"#toollockbodiesofwork": {
				click: this.onToollockbodiesofworkClick
			},
			"#newbodiesofworkcancel": {
				click: this.onNewbodiesofworkcancelClick
			},
			"#newbodiesofworksubmit": {
				click: this.onNewbodiesofworksubmitClick
			},
			"#newbodiesofworkcreate": {
				click: this.onNewbodiesofworkcreateClick
			}
		});
	},

	onMyJsonStoreLoad: function() {
		//debugger;
		var g_ = Ext.ComponentQuery.query("#bodiesofworkssubjectsgrid")[0];

		if (g_.getStore().getCount() > 0) {
		    g_.getSelectionModel().deselectAll();
		    g_.getSelectionModel().select( this.selectedIndex );
		}

		this.gridViewReady = true;

	},

	loadTabPanelForm: function(tabPanel, selected, fieldname) {
		debugger;
		var dockedItems = tabPanel.getDockedItems();
		var myForm = dockedItems[0];

		if( Ext.isDefined( myForm ) )
		{
		    console.log( myForm );
		    //var textBox = myForm.dockedItems.items[0];
		    var textBox = myForm.down('textareafield');
		    textBox.name = fieldname;
		    myForm.loadRecord( selected[0] );
		}
		else
		{
		    console.log( 'loadTabPanelForm(): No form' );
		    //console.log( tabPanel );
		}

		//editbodiesofworkwhattabpanel
		//DENIS 12/24/2014
		//var editButton = myForm.down('#editbodiesofworkwhattabpanel');
		var editButton = myForm.items.items[0];
		if( this.userRole === 'ROLE_USER') {
			editButton.disable();
		}
		else {
			editButton.enable();
		}
	},

	blurHandler: function(o, event, eOpts) {
		debugger;
		var p_			= o.up('form').up('panel');
		var myForm		= o.up('form');
		//var topP_		= p_.up('panel');
		var pItemId_	= p_.getItemId();
		var edit_		= p_.down('#edit' + pItemId_);
		var myTitle		= p_.title;
		console.log( edit_ );
		//console.log( topP_ );
		console.log( myForm );
		console.log( "pItemId_=" + pItemId_);
		//var myController = this;

		console.log( 'title=' + myTitle );

		//topP_.buttonHandler(edit_);

		Ext.Msg.show({
		    title:'Save Changes?',
		    //msg: 'Would you like to save your changes to ' + pItemId_ + ' ?',
		    msg: 'Would you like to save your changes to ' + myTitle + ' ?',
		    buttons: Ext.Msg.YESNO,
		    icon: Ext.Msg.QUESTION,
		    fn: function(buttonId) {
		        var mystore		= Ext.getStore("bodiesofwork.MyJsonStore");
		        if (buttonId == 'yes') {
		            Ext.Msg.show({
		                title: 'Save',
		                msg: 'record saved',
		                buttons: Ext.Msg.OK,
		                icon: Ext.window.MessageBox.INFO
		            });
		            debugger;

		            var myTextArea	= myForm.down('textareafield');
		            var myName		= myTextArea.getName();
		            var myValue		= myTextArea.getValue();
		            var record		= myForm.getRecord();
		            record.set( myName, myValue );
		            record.set( 'lastUpdated', new Date() );
		            record.set( 'whoUpdated', 'login' );

		            mystore.sync();
		        }
		        else {
		            Ext.Msg.show({
		                title: 'Cancel',
		                msg: 'record restored',
		                buttons: Ext.Msg.OK,
		                icon: Ext.window.MessageBox.INFO
		            });
		            mystore.reload();
		        }

		    }
		});
		//debugger;
		this.buttonHandler( edit_ );
	},

	buttonHandler: function(button, e, eOpts) {
		debugger;
		if( this.userRole === 'ROLE_USER' )
			return;
		window.console.log(button);
		var b_		= button;
		var form	= b_.up('panel');
		var p_		= form.up();
		var pItemId_ = p_.getItemId();
		var field_;

		if (pItemId_ == 'dailyhourstab') {
		    field_ = p_.down('numberfield');
		} else {
		    field_ = p_.down('textareafield');
		}

		if (b_.getText().charAt(0) == 'D') {
		    b_ = p_.down('#edit' + pItemId_);
		    b_.setText('Edit');
		    b_.setDisabled(false);
		    field_.setDisabled(true);
		} else {
		    b_.setText('Done');
		    field_.setDisabled(false);
		    field_.focus();
		}

	}

});
