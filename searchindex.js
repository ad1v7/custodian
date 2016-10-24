Search.setIndex({envversion:50,filenames:["_themes/README","changelog","custodian","custodian.ansible","custodian.cli","custodian.nwchem","custodian.qchem","custodian.vasp","index","modules"],objects:{"":{custodian:[2,0,0,"-"]},"custodian.ansible":{actions:[3,0,0,"-"],interpreter:[3,0,0,"-"]},"custodian.ansible.actions":{DictActions:[3,1,1,""],FileActions:[3,1,1,""],get_nested_dict:[3,3,1,""]},"custodian.ansible.actions.DictActions":{add_to_set:[3,2,1,""],inc:[3,2,1,""],pop:[3,2,1,""],pull:[3,2,1,""],pull_all:[3,2,1,""],push:[3,2,1,""],push_all:[3,2,1,""],rename:[3,2,1,""],set:[3,2,1,""],unset:[3,2,1,""]},"custodian.ansible.actions.FileActions":{file_copy:[3,2,1,""],file_create:[3,2,1,""],file_delete:[3,2,1,""],file_modify:[3,2,1,""],file_move:[3,2,1,""]},"custodian.ansible.interpreter":{Modder:[3,1,1,""]},"custodian.ansible.interpreter.Modder":{modify:[3,4,1,""],modify_object:[3,4,1,""]},"custodian.cli":{converge_geometry:[4,0,0,"-"],converge_kpoints:[4,0,0,"-"],cstdn:[4,0,0,"-"],run_nwchem:[4,0,0,"-"],run_vasp:[4,0,0,"-"]},"custodian.cli.converge_geometry":{do_run:[4,3,1,""],get_runs:[4,3,1,""]},"custodian.cli.converge_kpoints":{do_run:[4,3,1,""],get_runs:[4,3,1,""],main:[4,3,1,""]},"custodian.cli.cstdn":{main:[4,3,1,""],print_example:[4,3,1,""],run:[4,3,1,""]},"custodian.cli.run_nwchem":{do_run:[4,3,1,""],main:[4,3,1,""]},"custodian.cli.run_vasp":{do_run:[4,3,1,""],get_jobs:[4,3,1,""],load_class:[4,3,1,""],main:[4,3,1,""]},"custodian.custodian":{Custodian:[2,1,1,""],CustodianError:[2,7,1,""],ErrorHandler:[2,1,1,""],Job:[2,1,1,""],Validator:[2,1,1,""]},"custodian.custodian.Custodian":{LOG_FILE:[2,5,1,""],from_spec:[2,6,1,""],run:[2,4,1,""],run_interrupted:[2,4,1,""]},"custodian.custodian.ErrorHandler":{check:[2,4,1,""],correct:[2,4,1,""],is_monitor:[2,5,1,""],is_terminating:[2,5,1,""],raises_runtime_error:[2,5,1,""]},"custodian.custodian.Job":{name:[2,5,1,""],postprocess:[2,4,1,""],run:[2,4,1,""],setup:[2,4,1,""]},"custodian.custodian.Validator":{check:[2,4,1,""]},"custodian.nwchem":{handlers:[5,0,0,"-"],jobs:[5,0,0,"-"]},"custodian.nwchem.handlers":{NwchemErrorHandler:[5,1,1,""]},"custodian.nwchem.handlers.NwchemErrorHandler":{check:[5,4,1,""],correct:[5,4,1,""]},"custodian.nwchem.jobs":{NwchemJob:[5,1,1,""]},"custodian.nwchem.jobs.NwchemJob":{postprocess:[5,4,1,""],run:[5,4,1,""],setup:[5,4,1,""]},"custodian.qchem":{handlers:[6,0,0,"-"],jobs:[6,0,0,"-"]},"custodian.qchem.handlers":{QChemErrorHandler:[6,1,1,""]},"custodian.qchem.handlers.QChemErrorHandler":{as_dict:[6,4,1,""],backup:[6,4,1,""],check:[6,4,1,""],correct:[6,4,1,""],fix_error_code_134:[6,4,1,""],fix_error_killed:[6,4,1,""],fix_geom_opt:[6,4,1,""],fix_insufficient_static_memory:[6,4,1,""],fix_not_enough_total_memory:[6,4,1,""],fix_scf:[6,4,1,""],from_dict:[6,6,1,""],set_last_input_geom:[6,4,1,""],set_scf_initial_guess:[6,4,1,""]},"custodian.qchem.jobs":{QchemJob:[6,1,1,""]},"custodian.qchem.jobs.QchemJob":{as_dict:[6,4,1,""],command_available:[6,4,1,""],from_dict:[6,6,1,""],is_openmp_compatible:[6,2,1,""],postprocess:[6,4,1,""],run:[6,4,1,""],select_command:[6,4,1,""],setup:[6,4,1,""]},"custodian.utils":{backup:[2,3,1,""],get_execution_host_info:[2,3,1,""]},"custodian.vasp":{handlers:[7,0,0,"-"],interpreter:[7,0,0,"-"],jobs:[7,0,0,"-"],validators:[7,0,0,"-"]},"custodian.vasp.handlers":{AliasingErrorHandler:[7,1,1,""],CheckpointHandler:[7,1,1,""],FrozenJobErrorHandler:[7,1,1,""],MaxForceErrorHandler:[7,1,1,""],MeshSymmetryErrorHandler:[7,1,1,""],NonConvergingErrorHandler:[7,1,1,""],PositiveEnergyErrorHandler:[7,1,1,""],PotimErrorHandler:[7,1,1,""],StoppedRunHandler:[7,1,1,""],UnconvergedErrorHandler:[7,1,1,""],VaspErrorHandler:[7,1,1,""],WalltimeHandler:[7,1,1,""]},"custodian.vasp.handlers.AliasingErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],error_msgs:[7,5,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.CheckpointHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""],is_terminating:[7,5,1,""]},"custodian.vasp.handlers.FrozenJobErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.MaxForceErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.MeshSymmetryErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.NonConvergingErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.PositiveEnergyErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.PotimErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.StoppedRunHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""],is_terminating:[7,5,1,""]},"custodian.vasp.handlers.UnconvergedErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.VaspErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],error_msgs:[7,5,1,""],is_monitor:[7,5,1,""]},"custodian.vasp.handlers.WalltimeHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""],is_terminating:[7,5,1,""],raises_runtime_error:[7,5,1,""]},"custodian.vasp.interpreter":{VaspModder:[7,1,1,""]},"custodian.vasp.interpreter.VaspModder":{apply_actions:[7,4,1,""]},"custodian.vasp.jobs":{VaspJob:[7,1,1,""]},"custodian.vasp.jobs.VaspJob":{as_dict:[7,4,1,""],double_relaxation_run:[7,6,1,""],from_dict:[7,6,1,""],full_opt_run:[7,6,1,""],postprocess:[7,4,1,""],run:[7,4,1,""],setup:[7,4,1,""]},"custodian.vasp.validators":{VasprunXMLValidator:[7,1,1,""]},"custodian.vasp.validators.VasprunXMLValidator":{check:[7,4,1,""]},custodian:{ansible:[3,0,0,"-"],cli:[4,0,0,"-"],custodian:[2,0,0,"-"],nwchem:[5,0,0,"-"],qchem:[6,0,0,"-"],utils:[2,0,0,"-"],vasp:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","staticmethod","Python static method"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","classmethod","Python class method"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:staticmethod","3":"py:function","4":"py:method","5":"py:attribute","6":"py:classmethod","7":"py:exception"},terms:{"1ev":7,"1x1x1":[1,7],"abstract":[2,8],"boolean":8,"case":8,"catch":[1,2],"class":[1,2,3,5,6,7,8],"default":[1,2,3,5,6,7],"final":[2,6,7],"float":[6,7],"function":[1,2,7],"import":[1,8],"int":[2,6,7],"long":[7,8],"new":[1,3,8],"return":[1,2,3,6,7,8],"static":[1,3,6,7,8],"switch":[1,7],"true":[2,3,5,6,7],"try":6,__init__:8,_add_to_set:3,_each:3,_file_copi:[2,3,7],_file_delet:3,_file_mov:3,_inc:3,_pop:3,_pull:3,_pull_al:3,_push:3,_push_al:3,_renam:3,_set:[3,7],_theme:0,_unset:3,abov:8,absolut:7,abspath:0,access:3,accordingli:7,accur:7,achiev:7,action:[],action_keyword:3,activ:7,actual:[2,3,5,7,8],actual_cont:3,add:[0,8],add_to_set:3,added:1,addit:[6,8],addon:0,address:1,adopt:3,aflow:[1,7],after:[1,2,7,8],again:8,algo:[1,7],algorithm:6,alias:7,aliasing_incar:7,aliasingerrorhandl:[2,7],aliasingerrorhandlertest:[],all:[1,2,7,8],allow:[2,3,8],allowabl:3,alreadi:7,also:[0,7,8],alt_cmd:6,altern:0,alternat:6,alwai:8,ambigu:3,amin:7,amount:7,analysi:[2,8],ani:[2,3,7,8],ansibl:[],anubhav:8,any:8,api:[],append:[0,5,6,7],appli:[2,7],applic:8,apply_act:7,arbitrari:8,area:8,arg:[4,5,6,7,8],argument:[3,7,8],arising:8,around:7,as_dict:[3,6,7],aspect:8,assimil:1,associ:8,attempt:[7,8],authors:8,auto:[7,8],auto_continu:7,auto_gamma:[1,7],auto_npar:[1,7],automat:[1,7],avail:8,averag:7,avoid:[3,7],b3lyp:[5,6],back:[2,7],background:[1,8],backup:[1,2,5,6,7],backward:1,bad:2,badvasprunxmlhandl:1,bands:[1,7],base:[2,3,5,6,7,8],basi:[7,8],basic:[4,5,6,7],becaus:3,becom:8,been:[7,8],befor:2,below:8,better:[6,7],between:[2,7,8],bleed:8,bool:[2,3,5,6,7],bracket:7,brion:7,brions:[1,7],brmix:[1,7],buffer:[1,7],buffer_tim:7,bug:[1,8],buggi:8,bye:3,calcul:[],call:[1,2,7],callabl:2,can:[0,1,2,3,7,8],cannot:[2,7],care:7,caught:2,caus:[1,2,7,8],ceder:8,center:1,certain:8,chanc:8,change_algo:7,charg:8,check:[0,1,2,5,6,7,8],checkpoint:[1,2,6,7],checkpointhandl:7,chemistri:8,chevrier:8,chgcar:7,chk:2,chk_:7,chk_file:6,chkpt:7,cholia:8,cif:7,claim:8,classifi:2,classmethod:[2,6,7],clean_dir:[],cleanup:[1,2],cli:[],clone:8,cluster:1,cluster_name:2,cmd_name:6,code:8,combiant:7,combin:[4,7],come:[1,8],command:[5,6,7,8],command_avail:6,commatsci:8,common:[2,7,8],common_param:2,commonli:1,compat:[1,8],compil:1,complet:[2,7,8],complex:[6,7],compon:8,comprehens:[1,8],compris:8,comput:8,conceiv:7,concret:8,condit:8,conf:0,connection:8,consid:[7,8],consider:7,consolid:1,construct:2,constructor:[6,7],consult:8,contain:[0,7,8],contcar:[2,7],content:[],continu:7,contract:8,converg:[4,7,8],converge_geometri:[],converge_kpoint:[],copi:[2,3,5,6,7,8],copy_magmom:7,copyright:8,core:[1,7],correct:[1,2,5,6,7,8],correspond:7,could:7,cours:2,crash:7,creat:[2,3,8],creation:[2,8],creator:7,criteria:7,critic:1,cstdn:[],current:[1,2,5,6,7,8],custodian:[],custodian_exampl:8,custodian_param:2,custodiancheckpointtest:[],custodianerror:2,custodiantest:[],custom:2,dacek:1,dai:8,damages:8,dan:8,data:8,dav:7,david:1,davidson:8,de_threshold:7,deal:8,dealings:8,def:8,default_vasp_input_set:7,defin:[2,8],delet:[3,7],deltae:6,demonstr:8,densiti:7,dentet:[1,7],denteterrorhandl:8,deped:1,depend:[],deprec:[1,5],describ:2,desir:[2,7],dest:[2,3,7],detail:8,detect:[2,7,8],determin:7,develop:8,dft:[1,5,6,7],dict:[2,3,5,6,7,8],dictaction:[3,7],differ:[2,7,8],difficult:[2,7],diis_gdm:6,dir:1,direct:[5,7],directori:[1,2,7,8],distribut:8,do_run:4,doc:[],document:[0,1,3,7,8],doe:[2,3,7],doesn:[2,7],doi:8,done:8,doubl:[1,7],double_relaxation_run:[7,8],driv:0,due:[6,7,8],dure:[1,2,7,8],dwaraknath:8,each:[2,7],earli:2,easiest:8,easili:3,easy_instal:8,edddav:7,eddrmm:7,edg:8,ediff:7,ediffg:7,edwav:7,effect:[1,7],either:7,electron:[],electronic_step_stop:7,element:7,els:6,enabl:8,encount:[1,2,8],end:[2,7],energi:[7,8],ensur:[2,7],environ:7,err1:2,err2:2,error:[1,2,3,5,6,7,8],error_dict:2,error_msg:7,errorhandl:[1,2,5,6,7,8],especi:8,especial:1,etc:[2,7],even:[2,8],event:[1,2,8],ever:7,everi:[1,2,7],ex_backup_list:6,exampl:[],examplehandl:8,examplehandler2:[],examplehandler2b:[],examplejob:8,examplevalidator1:[],examplevalidator2:[],except:2,exception:2,excess:7,execut:[2,7],exist:[0,7],exit:[1,2],expand:1,expect:[7,8],explicit:2,express:8,fail:[2,6,7,8],failur:[1,2,6],fairli:8,fals:[2,5,6,7,8],fast:[1,7],faster:[1,2],fatal:7,featur:8,few:[1,7],fft:7,figur:8,file:[1,2,3,5,6,7,8],file_copi:3,file_cr:3,file_delet:3,file_modifi:3,file_mov:3,fileact:[3,7],filenam:[2,3,7],fine:7,finish:[1,2,7],firework:2,first:[1,2,6,7],fitness:8,fix:[1,2,6,8],fix_error_code_134:6,fix_error_kil:6,fix_geom_opt:6,fix_insufficient_static_memori:6,fix_not_enough_total_memori:6,fix_scf:6,flag:[1,2],flask:0,flexibl:[1,6,7,8],folder:[0,1],follow:[0,2,3,7,8],forc:7,form:[7,8],format:[2,8],former:2,found:7,framework:8,free:8,from:[1,2,3,6,7,8],from_dict:[3,6,7,8],from_spec:2,frozen:7,frozenjoberrorhandl:7,full:[3,7],full_opt_run:7,furnish:8,gamma:[1,7],gamma_vasp_cmd:7,gener:[2,5,6,7,8],genom:8,geoffroi:8,geom_max_cycl:6,geometri:[4,6,7],gerbrand:8,get:[],get_execution_host_info:2,get_job:4,get_nested_dict:3,get_run:4,git:0,github:8,given:[2,8],gracefulli:[1,2,8],grad_not_orth:7,gradient:7,grant:8,grid:7,guess:6,guid:0,gunter:8,gzip:[1,2,5,6,7],gzipped_output:[2,5],half_cpu:6,half_kpt_first_relax:7,half_kpts_first_relax:7,halv:7,handl:[1,2,7,8],handler:[],hanld:1,happen:7,hautier:8,have:[1,2,7,8],hdlr:2,hello:3,here:8,herebi:8,hermitian:7,hessian:1,high:[7,8],higher:7,highli:7,hit:7,holders:8,hopefulli:8,host:2,hostname:2,hour:7,howev:3,hse:7,html_theme:0,html_theme_path:0,http:8,hundr:8,ideal:8,identifi:8,ignor:[3,7],immedi:[1,2],implement:[1,2,3,5,8],implied:8,important:1,imposs:8,improv:[1,2],improve:1,improvement:1,inc:3,incar:[1,7],includ:[1,3,7,8],including:8,incompat:1,incorrect:1,incorrect_shift:7,increas:[7,8],increment:[1,8],indefinit:8,index:8,indic:[1,2,8],indicat:[2,3,7],individu:2,infinit:7,inform:[3,8],init:[7,8],initi:[5,6,7,8],initial:[2,3,5,6,7],initio:8,input:[5,6,7,8],input_dict:3,input_fil:[5,6],input_filenam:7,insert:3,instal:8,instanc:2,instead:[1,3,5,7],insuffici:8,integ:7,intend:0,interfac:2,intern:7,interpret:[],interrupt:8,interuppt:2,interv:7,interval:7,introdc:1,inv_rot_mat:7,invers:7,involv:8,ionic:7,is_monitor:[1,2,7,8],is_openmp_compat:6,is_termin:[1,2,7],ismear:8,issu:[1,8],istart:7,isym:1,iter:6,jain:8,jit:8,job1:2,job2:2,job3:2,job:[],jobid:8,jobs_common_param:2,json:[1,2,8],just:[7,8],kei:[2,3,8],kenneth:0,keyword:3,kill:7,kind:[6,7,8],known:8,kocher:8,kpoint:[7,8],kpoints:[1,7,8],kr_small:0,kristin:8,labort:7,languag:3,lapack:7,larg:[0,6,7,8],large_static_mem:6,larger:6,last:[1,6,7],latest:[1,8],latter:2,lattic:7,lbnl:8,lead:2,length:2,less:[7,8],let:[2,8],level:7,liability:8,liable:8,librari:[0,8],like:[3,7,8],limit:[7,8],limited:8,linear:4,link:[2,8],list:[2,3,5,6,7,8],list_of_actions_taken:2,list_of_error:2,load:2,load_class:4,log_file:2,longer:1,look:7,lstop:7,lwave:7,made:1,magmom:7,mai:[1,2,7,8],main:[4,8],major:[1,8],make:[2,3],manag:[2,6,8],mani:[1,7,8],master:[4,7],match:7,materi:8,matrix:7,max:[6,7],max_error:[1,2,7,8],max_force_threshold:7,max_step:[4,7],maxforceerrorhandl:7,maxforceerrorhandlertest:[],maximum:[2,7],mean:[2,3,6,7,8],measur:2,mechan:[1,2,8],memori:6,merchantability:8,merg:8,mesh:7,meshsymmetryerrorhandl:7,meshsymmetryhandl:2,messag:[1,2,5,7,8],method:[1,2,7,8],methodnam:[],michael:8,might:7,min:7,minor:1,minut:2,misc:1,miscellan:1,mit:8,mitsuhiko:0,mitvaspinputset:7,mod:[3,4],modder:[3,7],moddermodif:7,moddertest:[],mode:[1,2,3,4,7,8],modif:3,modifi:[3,7,8],modify_object:3,mol:[5,6],mongo:3,monitor:[1,2,7,8],monitor_freq:2,monti:[1,2],more:[1,2,8],most:[0,8],mostli:3,move:[1,2,3],mpirun:7,msonabl:2,much:[1,2],multi:[1,7],must:[1,2,3,7,8],mutabl:8,myobject:[],name:[2,4,5,6,7,8],necessari:[1,5,7,8],necessarili:[6,7],need:[1,2,5,6,7,8],nelect:1,nest:3,new_file_nam:3,new_mol:6,next:7,ngx:7,ngy:7,ngz:7,nice:2,nionic_step:7,njob:8,nkpt:7,non:[3,7],nonconvergingerrorhandl:7,none:[2,3,5,6,7],noninfringement:8,normal:[1,7],nose:8,notat:3,note:[2,3,8],notic:[2,8],now:[1,8],npar:[1,7],number:[1,2,7,8],nwchem:[],nwchem_cmd:5,nwchemerrorhandl:5,nwchemerrorhandlertest:[],nwchemjob:5,nwout:5,obj:3,object:[2,3,6,7,8],obtain:8,occur:[2,7],off:1,often:[6,7,8],older:8,onc:[1,2,7],one:7,ong:[1,8],onli:[1,2,3,5,6,7],only:7,open:8,openmp:6,oper:[6,7],opt:2,optim:[1,6,7],option:[1,5],order:[2,8],org:8,orig:[5,6,7],orthogon:7,oszicar:7,other:[1,2,7,8],otherwis:[2,7,8],otherwise:8,out:[0,5,7,8],outcar:7,outlin:8,output:[1,2,5,6,7,8],output_fil:[5,6,7],output_filenam:[5,7],output_vasprun:7,over:2,overrid:[5,7],overview:8,owner:3,packag:[],page:0,parallel:2,param:[2,7,8],paramet:[2,3,5,6,7,8],parent:2,particular:[1,2,7,8],particularli:[1,8],partit:2,pass:[2,7],path:[0,2,3],pathnam:3,pbs:[1,7],pbs_walltime:7,pbswalltimehand:1,pbswalltimehandl:1,per:[1,7],perform:[1,2,3,4,5,7,8],permiss:8,permit:8,person:8,persson:8,ping:[1,8],pip:8,place:[3,8],pleas:[5,8],plugin:8,point:[6,7],poll:[2,7],polling_time_step:2,pop:3,popen:[2,7],portion:8,poscar:[2,7],poscarerrorhandl:8,posit:7,positiveenergyerrorhandl:7,positiveenergyhandlertest:[],possibl:2,post:[1,2],postprocess:[2,5,6,7,8],potcar:7,potenti:[2,8],potim:7,potimerrorhandl:7,potimhandlertest:[],pre:2,preced:3,precis:1,prefer:3,prefix:2,present:[5,7,8],prevent:7,pricel:[1,7],print:[3,8],print_exampl:4,prior:6,prioriti:2,probabl:7,problem:7,process:[2,7],product:[1,7],progress:[1,7],project:[0,8],proper:7,properli:1,properti:[2,8],provid:[1,2,7],provided:8,pssyevx:7,publish:8,pull:3,pull_al:3,purpos:8,purpose:8,push:3,push_al:3,put:[0,8],pvasp:7,py3k:1,pymatgen:[1,3,5,6,7,8],pymatpro:3,pypi:8,python:[1,2,8],qchem:[],qchem_cmd:6,qchem_job:6,qchemerrorhandl:6,qchemerrorhandlertest:[],qchemjob:6,qcinp:6,qcinput:6,qclog_fil:6,qcout:6,queue:2,quickli:2,rais:[2,3,7],raises_runtime_error:[2,7],random:8,rang:8,rate:8,rather:7,rca_diis:6,rca_gdm_thresh:6,reach:7,read:7,real:8,real_opt:7,real_optlai:7,real_optlay:7,recommend:[1,7],record:[6,7],recov:8,recoveri:8,redirect:[5,6,7],refactor:1,refer:[],regular:7,reitz:0,rel:8,relat:[0,2],relax1:[2,7],relax2:2,relax:[1,7,8],releas:[1,8],remain:[2,7],renam:[3,5,7],repars:7,repo:8,repositori:0,request:[1,2],requir:[],rerun:[2,8],research:8,restart:[2,7,8],restor:1,restrict:8,resubmit:1,result:[2,7,8],rewrit:7,richard:[1,8],right:8,robust:[1,2,8],root:2,rot_mat:1,rot_matrix:7,rotat:7,routin:7,rpa:7,rspher:7,rudimentari:1,run:[1,2,4,5,6,7,8],run_interrupt:2,run_nwchem:[],run_vasp:[],runtest:[],runtim:2,runtimeerror:1,sad:6,sai:[2,7],same:8,sampl:2,save:2,scale:8,scf:6,scf_max_cycl:6,scienc:8,scratch:[1,2],scratch_dir:[1,2],scratch_link:2,script:[1,4,8],search:1,sec:[2,7],second:[2,7],see:[3,7,8],select_command:6,self:8,sell:8,sent:2,separ:1,seq:6,sequenc:[2,3,7,8],seri:[2,7,8],serializ:[2,8],seriou:7,server:8,set:[1,2,3,6,7,8],set_last_input_geom:6,set_scf_initial_guess:6,settings_overrid:[2,5,7],setup:[1,2,5,6,7,8],sever:8,sge:7,shall:8,shift:[1,7],should:[1,2,3,7,8],shreya:8,shyam:8,shyue:[1,8],signal:2,signific:[1,7],significantli:1,similar:8,similarli:8,simpl:[],simpli:[2,3,7,8],simul:[3,8],simultan:7,sinc:7,singl:1,situat:8,skip:2,skip_over_error:2,slurm:7,small:[0,7],smaller:7,softwar:8,software:8,some:[1,2,7,8],someth:[7,8],sometim:[2,7],sort:2,sourc:[2,3,4,5,6,7,8],space:[1,2,7],spec:2,speci:7,special:[2,3,7],specif:[1,8],specifi:[1,2,7],speed:[1,7],speedup:7,split:8,spuriou:1,sqrt:[1,7],stabl:[],standard:[0,5,6,7],start:[1,2,7,8],staticmethod:8,std_err:7,stderr_fil:7,stdout:[5,7],step:[1,2,7,8],steve:1,stop:7,stopcar:7,stoppedrunhandl:7,storag:8,store:[2,7],str:[2,3,5,6,7],strict:[3,7],string:[2,3],structur:[],sub:[1,7,8],subclass:8,subdir:7,subject:8,sublicens:8,submodul:[],subprocess:7,subroutin:7,subsequ:7,subset:1,subspac:7,subspacematrix:7,substanti:8,success:[1,2,6,8],suffici:[7,8],suffix:[2,7],sum:8,summar:8,supercomput:1,suppli:[3,7,8],support:[1,2,3,7],symbol:2,symmetri:[1,7],symprec:7,syntax:3,system:[1,2,4,7,8],take:[3,8],taken:[2,8],tar:2,target:[4,8],task:[1,2],teardown:[],teardownclass:[],tempfil:2,temporari:2,tend:8,term:8,termin:[1,2,8],terminate_func:2,test:[],test_alias:[],test_aliasing_incar:[],test_as_dict:[],test_autoz_error:[],test_brmix:[],test_check_and_correct:[],test_check_correct:[],test_checkpoint_load:[],test_custodian:[],test_dentet:[],test_dict_modifi:[],test_edddav:[],test_eddrmm:[],test_exit_code_134:[],test_exit_code_134_after_scf_fix:[],test_file_modifi:[],test_first_step:[],test_freq_job_too_smal:[],test_from_spec:[],test_frozen_job:[],test_gradient_not_orthogon:[],test_handl:[],test_interpret:[],test_job:[],test_json_serializ:[],test_mesh_symmetri:[],test_modify_object:[],test_nan_error:[],test_negative_eigen:[],test_no_error:[],test_no_input_text:[],test_not_enough_total_memori:[],test_opt_fail:[],test_pcm_solvent_deprec:[],test_postprocess:[],test_potim_correct:[],test_pssyevx:[],test_rot_matrix:[],test_run:[],test_run_interrupt:[],test_scf_fon:[],test_scf_gdm:[],test_scf_in_aimd_reset:[],test_scf_rca:[],test_scf_reset:[],test_setup:[],test_stat:[],test_strict_mod:[],test_to_from_dict:[],test_too_few_band:[],test_ts_opt:[],test_unable_to_determine_lambda:[],test_unrecover:[],test_valid:[],testcas:[],tet:7,tetirr:7,tetrahedron:7,than:[2,6,7,8],thei:8,theme:0,thi:[0,1,2,3,4,5,6,7,8],those:8,though:[],thousand:8,three:8,threshold:[6,7],through:[2,8],throughput:8,time:[1,2,7,8],timeout:7,tmp:2,to_dict:8,todo:5,toler:7,too:[1,7],too_few_band:7,tort:8,total:[7,8],transfer:8,transpar:1,tri:[1,2],tripl:7,triple:1,triple_product:7,tune:7,tupl:2,turn:[1,8],two:[7,8],txt:7,type:[1,2,6,8],typic:7,ultra:6,unabl:7,unconverg:1,unconvergederrorhandl:[7,8],unconvergederrorhandlertest:[],under:8,underscor:3,unfix:2,unfortun:7,uniform:8,uniqu:2,unit:8,unittest:8,univers:3,unlik:7,unrecover:2,unrecoverable_error:1,unset:3,unsupport:[3,7],until:[7,8],updat:[1,7],upon:2,usag:8,use:[7,8],used:[2,7],useful:[1,7],user:2,using:8,usual:[2,3,7],util:[],valid:[],valu:[7,8],valueerror:[3,7],variabl:[1,7,8],variou:4,variuo:4,vasp:[],vasp_cmd:[2,7],vasp_command:4,vasperrorhandl:[1,2,7,8],vasperrorhandlertest:[],vaspinput:7,vaspinput_kei:7,vaspinputset:7,vaspjob:[1,2,7,8],vaspjobtest:[],vaspmodd:7,vasprun:7,vasprunxmlvalid:[2,7],vasprunxmlvalidatortest:[],vastli:1,vector:7,veri:[0,7,8],via:2,vienna:8,vincent:8,vldr:2,vol:7,vol_change_tol:7,wai:[1,2,8],wait:[1,2],wall:[1,7],wall_tim:7,walltim:[1,7],walltimehandl:[1,7],walltimehandlertest:[],want:[2,7],warning:7,waroqui:1,warranties:8,warranty:8,wavecar:7,wavefunct:7,well:[1,8],what:[3,7],whatev:7,when:[1,2,7,8],where:[1,2,5,7,8],whether:[1,2,3,5,6,7,8],which:[1,2,3,5,7,8],whom:8,wildcard:2,william:8,within:7,without:[3,6,7,8],work:[1,2,8],workflow:[2,8],world:[3,8],wors:7,would:8,wouldn:7,wrap:7,wrapper:8,write:[7,8],written:[7,8],xiaohui:1,xml:7,xrang:8,yaml:[2,8],yet:5,yield:2,you:[0,2,7,8],your:[0,7,8],zbrent:[1,7],zero:8,zhegv:7,zpotrf:7,zpotrferrorhandlertest:[]},titles:["krTheme Sphinx Style","Change Log","custodian package","custodian.ansible package","custodian.cli package","custodian.nwchem package","custodian.qchem package","custodian.vasp package","Custodian","custodian"],titleterms:{action:3,ansibl:3,api:8,calcul:8,chang:[1,8],cite:8,cli:4,content:[2,3,4,5,6,7],converge_geometri:4,converge_kpoint:4,cstdn:4,custodian:[2,3,4,5,6,7,8,9],depend:8,development:8,doc:8,electron:8,exampl:8,get:8,handler:[5,6,7],how:8,interpret:[3,7],job:[5,6,7],krtheme:0,licens:8,log:[1,8],modul:[2,3,4,5,6,7],nwchem:5,optional:8,packag:[2,3,4,5,6,7],practic:8,qchem:6,refer:8,requir:8,run_nwchem:4,run_vasp:4,simpl:8,sphinx:0,stabl:8,structur:8,style:0,submodul:[2,3,4,5,6,7],subpackag:[2,3,5,6,7],test:[],test_custodian:[],test_handl:[],test_interpret:[],test_job:[],test_valid:[],usage:8,util:2,valid:7,vasp:7,version:[1,8]}})