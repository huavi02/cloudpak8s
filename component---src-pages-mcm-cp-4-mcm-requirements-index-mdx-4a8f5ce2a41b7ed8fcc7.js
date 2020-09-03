(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{U8L7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return i}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c={},l={_frontmatter:c},m=n.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(m,b({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This section covers hardware and software requirements for CP4MCM installation.")),Object(r.b)("h2",null,"Multicloud Manager Hub (MCM)"),Object(r.b)("h3",null,"Minimum Hardware Requirements"),Object(r.b)("p",null,"Single Node Requirements"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Requirement"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"All management services enabled"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"All management services including logging disabled"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Number of hosts"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Cores"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"16"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"CPU"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),">=2.4 GHz"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),">=2.4 GHz")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"RAM"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"32 GB"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"32 GB")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Free disk space to install"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),">=200 GB"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),">=150 GB")))),Object(r.b)("h3",null,"Persistent Storage Requirements"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Persistent Storage"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Size (GB)"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Recommended"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Access"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Comments"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"etcd"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWO"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Required")))),Object(r.b)("h3",null,"Supported Platforms"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Managed"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Public"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Private"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"IBM Redhat OpenShift"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"OCP"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"OCP")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Managed OpenShift on AWS"),Object(r.b)("td",b({parentName:"tr"},{align:"left"})),Object(r.b)("td",b({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Managed OpenShift on Azure"),Object(r.b)("td",b({parentName:"tr"},{align:"left"})),Object(r.b)("td",b({parentName:"tr"},{align:"left"}))))),Object(r.b)("h3",null,"Required Ports"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Port"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Access Type"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Usage"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"8001"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"External *"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"default for managed cluster to communicate with Kubernetes API server port on the hub cluster")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"8500"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"External *"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"default for managed cluster to communicate with Docker registry on the hub cluster")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"443"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"External *"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"default for hub cluster to communicate with Klusterlet service on IBM Cloud Private nginx ingress")))),Object(r.b)("p",null,"*External - port must be open to allow connections from outside the cluster."),Object(r.b)("h3",null,"Managed Clusters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Cloud Type"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"List"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Managed"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"IBM Redhat OpenShift")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Public"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"OCP , IKS , EKS , AKS , GKE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Private"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"OCP , PKS ??-JW")))),Object(r.b)("p",null,"Hardware requirements for managed clusters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Component"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"CPU request"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"CPU limit"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Memory request"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Memory limit"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"coredns"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"100m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"500m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"70Mi"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"170Mi")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"service-registry"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"100m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"500m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"128Mi"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"256Mi")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"connection-manager"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"100m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"500m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"128Mi"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"256Mi")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"klusterlet"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"200m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"1000m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"128Mi"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"500Mi")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"policy-compliance"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"25m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"250m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"128Mi"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"256Mi")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"search-collector"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"25m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"250m"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"128Mi"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"256Mi")))),Object(r.b)("h2",null,"Cloud Automation Manager (CAM)"),Object(r.b)("h3",null,"IBM Passport Advantage (PPA) Part Numbers"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"eImage descriptions"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"file name"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Part number"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"IBM Cloud Private 3.2 for Linux (x86_64) Cloud Automation Manager 3.2.1"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"icp-cam-x86_64-3.2.0.tar.gz"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"CC2IUEN")))),Object(r.b)("h3",null,"Minimum Hardware Requirements"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ensure the processes, such as Prometheus and logstash, are running and all requirements are met."),Object(r.b)("li",{parentName:"ul"},"Cloud Automation Manager will consume worker node resources")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Cloud Automation Manager size"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Worker nodes"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"vCPU"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Memory (GB)"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Single node deployment"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"12"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),">30"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Single node deployment without metering"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"12"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),">20"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"High availability configuration"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"4 per node"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"16 GB per node"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"High concurrent deployment requirements (above 10)"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"6 per node"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"20 GB per node"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"2vCPU 4 GB memory for every additional 10 concurrent deployments")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Large number of deployed instances"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"3"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"5 per node"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"16 GB per node"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"1vCPU for every 15K deployments managed")))),Object(r.b)("h3",null,"Persistent Storage Requirements"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," User must create persistent volumes to store Cloud Automation Manager database and log data."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Persistent Storage"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Size (GB)"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Recommended"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Access"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Comments"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"cam-mongo-pv"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"20 GB"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"20GB for up to 10k deployments. Add 10 GB for each additional 10k deployments.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"cam-logs-pv"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"10 GB"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Static")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"cam-terraform-pv"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"15 GB"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Usage can grow or shrink")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"cam-bpd-appdata-pv"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"20 GB"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"The size grows based on the number of templates in local repository")))),Object(r.b)("h3",null,"Supported Operating Systems and Platforms"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cloud Automation Manager performs ’",Object(r.b)("strong",{parentName:"li"},"manage-to"),"’ operations directly on the hypervisor and does not have any restriction on the operating system level requirement."),Object(r.b)("li",{parentName:"ul"},"To know more about minimum system requirements for setting up and running the middleware Content Runtime within a virtual machine, see ",Object(r.b)("a",b({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_3.2.1.0/content/cam_content_camc_requirements.html?view=kc"}),"System requirements"),".")),Object(r.b)("h3",null,"Other Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Internet connectivity is required for deployments to public cloud providers like IBM Cloud, Amazon EC2, and Microsoft Azure.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("table",{parentName:"li"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Minimum browser supported"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Firefox 52")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Chrome 57")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Safari 10.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Edge 16"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Additional resources and configuration may be required based on the desired use of automation content available with Cloud Automation Manager. To understand the automation content available for use, see ",Object(r.b)("a",b({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_3.2.1.0/content/cam_content_overview_summary.html?view=kc"}),"About Cloud Automation Manager Content"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Elevated privileges are required. For more information, see ",Object(r.b)("a",b({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_3.2.1.0/cam_prereq.html?view=kc"}),"Prerequisites for installing Cloud Automation Manager"),"."))),Object(r.b)("h2",null,"IBM Cloud App Management (iCAM)"),Object(r.b)("h3",null,"IBM Passport Advantage (PPA) Part Numbers"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": visit ",Object(r.b)("a",b({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.2.1/com.ibm.app.mgmt.doc/content/install_download_pm_part_no.html"}),"IBM Cloud App Management components")," for a list of additional items and respective part numbers."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"eImage descriptions"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"file name"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Part number"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"IBM Cloud App Management V2019.2.1 Server Install xlinux"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"app_mgmt_server_2019.2.1.tar.gz"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"CC2DXEN")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"IBM Cloud App Management  V2019.2.1 for Eventing Klusterlet Config on AMD64"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"agent_ppa_2019.2.1_prod_amd64.tar.gz"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"CC2LSEN")))),Object(r.b)("h3",null,"Minimum Hardware Requirements"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note: Demonstration/Proof of Concept"),"\nThis is a Size0 environment requirement. This size is suitable for a very small demonstration, trial or proof of concept. It is only suitable for a minimal workload. This size is designed to reduce the size of the microservices deployed to minimize the required hardware."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Approx resources (Agents, Data Collectors)"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Metrics per minute"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Number of VMs/hosts"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"CPU (cores)"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"RAM (GB)"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Disk (GB)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Up to 100"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Up to 25000"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"2"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"12"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"32"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"100")))),Object(r.b)("h3",null,"Persistent Storage Requirements"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note")," visit ",Object(r.b)("a",b({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.2.1/com.ibm.app.mgmt.doc/content/install_storage_formatdrive.html"}),"Configuring the disk drives for the said services")," for additional details"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Persistent Storage"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Size (GB)"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Recommended"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Access"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Comments"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Cassandra"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"50"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Local, vSphere, File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Required")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Couch DB"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"5"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Local, vSphere, File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Required")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"DataStore"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"5"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Local, vSphere, File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Required")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Zookeeper"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Local, vSphere, File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Required")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Kafka Broker"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"5"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Local, vSphere, File Storage"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"RWX"),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Required")))),Object(r.b)("h3",null,"Supported Operating Systems"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Operating System"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"OS Minimum"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Hardware"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Bitness"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Components"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"RHEL Server 7"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"7.3"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"x86-64"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"64-Exploit"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:"left"}),"Ubuntu 16.04 LTS"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Base"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"x86-64"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"64-Exploit"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Server")))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-requirements-index-mdx-4a8f5ce2a41b7ed8fcc7.js.map