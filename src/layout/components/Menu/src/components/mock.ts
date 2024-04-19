export const mockRouters = [
  {
    path: "/redirect",
    name: "Redirect",
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        meta: {},
      },
    ],
    meta: {
      hidden: true,
      noTagsView: true,
    },
  },
  {
    path: "/",
    redirect: "/index",
    name: "Home",
    meta: {},
    children: [
      {
        path: "index",
        name: "Index",
        meta: {
          title: "router.home",
          icon: "ep:home-filled",
          noCache: false,
          affix: true,
        },
      },
    ],
  },
  {
    path: "/user",
    name: "UserInfo",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "profile",
        name: "Profile",
        meta: {
          canTo: true,
          hidden: true,
          noTagsView: false,
          icon: "ep:user",
          title: "common.profile",
        },
      },
      {
        path: "notify-message",
        name: "MyNotifyMessage",
        meta: {
          canTo: true,
          hidden: true,
          noTagsView: false,
          icon: "ep:message",
          title: "我的站内信",
        },
      },
    ],
  },
  {
    path: "/dict",
    name: "dict",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "type/data/:dictType",
        name: "SystemDictData",
        meta: {
          title: "字典数据",
          noCache: true,
          hidden: true,
          canTo: true,
          icon: "",
          activeMenu: "/system/dict",
        },
      },
    ],
  },
  {
    path: "/codegen",
    name: "CodegenEdit",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "edit",
        name: "InfraCodegenEditTable",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: "ep:edit",
          title: "修改生成配置",
          activeMenu: "infra/codegen/index",
        },
      },
    ],
  },
  {
    path: "/job",
    name: "JobL",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "job-log",
        name: "InfraJobLog",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: "ep:edit",
          title: "调度日志",
          activeMenu: "infra/job/index",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      hidden: true,
      title: "router.login",
      noTagsView: true,
    },
  },
  {
    path: "/sso",
    name: "SSOLogin",
    meta: {
      hidden: true,
      title: "router.login",
      noTagsView: true,
    },
  },
  {
    path: "/social-login",
    name: "SocialLogin",
    meta: {
      hidden: true,
      title: "router.socialLogin",
      noTagsView: true,
    },
  },
  {
    path: "/403",
    name: "NoAccess",
    meta: {
      hidden: true,
      title: "403",
      noTagsView: true,
    },
  },
  {
    path: "/404",
    name: "NoFound",
    meta: {
      hidden: true,
      title: "404",
      noTagsView: true,
    },
  },
  {
    path: "/500",
    name: "Error",
    meta: {
      hidden: true,
      title: "500",
      noTagsView: true,
    },
  },
  {
    path: "/bpm",
    name: "bpm",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "manager/form/edit",
        name: "BpmFormEditor",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: "设计流程表单",
          activeMenu: "/bpm/manager/form",
        },
      },
      {
        path: "manager/model/edit",
        name: "BpmModelEditor",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: "设计流程",
          activeMenu: "/bpm/manager/model",
        },
      },
      {
        path: "manager/simple/workflow/model/edit",
        name: "SimpleWorkflowDesignEditor",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: "仿钉钉设计流程",
          activeMenu: "/bpm/manager/model",
        },
      },
      {
        path: "manager/definition",
        name: "BpmProcessDefinition",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: "流程定义",
          activeMenu: "/bpm/manager/model",
        },
      },
      {
        path: "process-instance/detail",
        name: "BpmProcessInstanceDetail",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: "流程详情",
          activeMenu: "/bpm/task/my",
        },
      },
      {
        path: "oa/leave/create",
        name: "OALeaveCreate",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: "发起 OA 请假",
          activeMenu: "/bpm/oa/leave",
        },
      },
      {
        path: "oa/leave/detail",
        name: "OALeaveDetail",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: "查看 OA 请假",
          activeMenu: "/bpm/oa/leave",
        },
      },
    ],
  },
  {
    path: "/mall/product",
    name: "ProductCenter",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "spu/add",
        name: "ProductSpuAdd",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: "ep:edit",
          title: "商品添加",
          activeMenu: "/mall/product/spu",
        },
      },
      {
        path: "spu/edit/:id(\\d+)",
        name: "ProductSpuEdit",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: "ep:edit",
          title: "商品编辑",
          activeMenu: "/mall/product/spu",
        },
      },
      {
        path: "spu/detail/:id(\\d+)",
        name: "ProductSpuDetail",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: "ep:view",
          title: "商品详情",
          activeMenu: "/mall/product/spu",
        },
      },
      {
        path: "property/value/:propertyId(\\d+)",
        name: "ProductPropertyValue",
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: "ep:view",
          title: "商品属性值",
          activeMenu: "/product/property",
        },
      },
    ],
  },
  {
    path: "/mall/trade",
    name: "TradeCenter",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "order/detail/:id(\\d+)",
        name: "TradeOrderDetail",
        meta: {
          title: "订单详情",
          icon: "ep:view",
          activeMenu: "/mall/trade/order",
        },
      },
      {
        path: "after-sale/detail/:id(\\d+)",
        name: "TradeAfterSaleDetail",
        meta: {
          title: "退款详情",
          icon: "ep:view",
          activeMenu: "/mall/trade/after-sale",
        },
      },
    ],
  },
  {
    path: "/member",
    name: "MemberCenter",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "user/detail/:id",
        name: "MemberUserDetail",
        meta: {
          title: "会员详情",
          noCache: true,
          hidden: true,
        },
      },
    ],
  },
  {
    path: "/pay",
    name: "pay",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "cashier",
        name: "PayCashier",
        meta: {
          title: "收银台",
          noCache: true,
          hidden: true,
        },
      },
    ],
  },
  {
    path: "/diy",
    name: "DiyCenter",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "template/decorate/:id",
        name: "DiyTemplateDecorate",
        meta: {
          title: "模板装修",
          noCache: true,
          hidden: true,
          activeMenu: "/mall/promotion/diy/template",
        },
      },
      {
        path: "page/decorate/:id",
        name: "DiyPageDecorate",
        meta: {
          title: "页面装修",
          noCache: true,
          hidden: true,
          activeMenu: "/mall/promotion/diy/page",
        },
      },
    ],
  },
  {
    path: "/crm",
    name: "CrmCenter",
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "clue/detail/:id",
        name: "CrmClueDetail",
        meta: {
          title: "线索详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/clue",
        },
      },
      {
        path: "customer/detail/:id",
        name: "CrmCustomerDetail",
        meta: {
          title: "客户详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/customer",
        },
      },
      {
        path: "business/detail/:id",
        name: "CrmBusinessDetail",
        meta: {
          title: "商机详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/business",
        },
      },
      {
        path: "contract/detail/:id",
        name: "CrmContractDetail",
        meta: {
          title: "合同详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/contract",
        },
      },
      {
        path: "receivable-plan/detail/:id",
        name: "CrmReceivablePlanDetail",
        meta: {
          title: "回款计划详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/receivable-plan",
        },
      },
      {
        path: "receivable/detail/:id",
        name: "CrmReceivableDetail",
        meta: {
          title: "回款详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/receivable",
        },
      },
      {
        path: "contact/detail/:id",
        name: "CrmContactDetail",
        meta: {
          title: "联系人详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/contact",
        },
      },
      {
        path: "product/detail/:id",
        name: "CrmProductDetail",
        meta: {
          title: "产品详情",
          noCache: true,
          hidden: true,
          activeMenu: "/crm/product",
        },
      },
    ],
  },
  {
    path: "/external-link",
    meta: {
      name: "作者动态",
    },
    children: [
      {
        path: "https://www.iocoder.cn",
        name: "Https://www.iocoder.cn",
        meta: {
          title: "作者动态",
          icon: "people",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/external-link",
    meta: {
      name: "Boot 开发文档",
    },
    children: [
      {
        path: "https://doc.iocoder.cn/",
        name: "Https://doc.iocoder.cn/",
        meta: {
          title: "Boot 开发文档",
          icon: "education",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/external-link",
    meta: {
      name: "Cloud 开发文档",
    },
    children: [
      {
        path: "https://cloud.iocoder.cn",
        name: "Https://cloud.iocoder.cn",
        meta: {
          title: "Cloud 开发文档",
          icon: "documentation",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/system",
    name: "/system",
    meta: {
      title: "系统管理",
      icon: "system",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "tenant",
        name: "Tenant",
        meta: {
          title: "租户管理",
          icon: "peoples",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "list",
            name: "SystemTenant",
            meta: {
              title: "租户列表",
              icon: "peoples",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "package",
            name: "SystemTenantPackage",
            meta: {
              title: "租户套餐",
              icon: "eye",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "user",
        name: "SystemUser",
        meta: {
          title: "用户管理",
          icon: "user",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "role",
        name: "SystemRole",
        meta: {
          title: "角色管理",
          icon: "peoples",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "menu",
        name: "SystemMenu",
        meta: {
          title: "菜单管理",
          icon: "tree-table",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "dept",
        name: "SystemDept",
        meta: {
          title: "部门管理",
          icon: "tree",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "post",
        name: "SystemPost",
        meta: {
          title: "岗位管理",
          icon: "post",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "dict",
        name: "SystemDictType",
        meta: {
          title: "字典管理",
          icon: "dict",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "notice",
        name: "SystemNotice",
        meta: {
          title: "通知公告",
          icon: "message",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "log",
        name: "Log",
        meta: {
          title: "审计日志",
          icon: "log",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "operate-log",
            name: "SystemOperateLog",
            meta: {
              title: "操作日志",
              icon: "form",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "login-log",
            name: "SystemLoginLog",
            meta: {
              title: "登录日志",
              icon: "logininfor",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "oauth2",
        name: "Oauth2",
        meta: {
          title: "OAuth 2.0",
          icon: "people",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "oauth2/application",
            name: "SystemOAuth2Client",
            meta: {
              title: "应用管理",
              icon: "tool",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "token",
            name: "SystemTokenClient",
            meta: {
              title: "令牌管理",
              icon: "online",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "social",
        name: "Social",
        meta: {
          title: "三方登录",
          icon: "fa:500px",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "client",
            name: "SocialClient",
            meta: {
              title: "三方应用",
              icon: "ep:set-up",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "user",
            name: "SocialUser",
            meta: {
              title: "三方用户",
              icon: "ep:avatar",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "sms",
        name: "Sms",
        meta: {
          title: "短信管理",
          icon: "validCode",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "sms-channel",
            name: "SystemSmsChannel",
            meta: {
              title: "短信渠道",
              icon: "phone",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "sms-template",
            name: "SystemSmsTemplate",
            meta: {
              title: "短信模板",
              icon: "phone",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "sms-log",
            name: "SystemSmsLog",
            meta: {
              title: "短信日志",
              icon: "phone",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "mail",
        name: "Mail",
        meta: {
          title: "邮箱管理",
          icon: "email",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "mail-account",
            name: "SystemMailAccount",
            meta: {
              title: "邮箱账号",
              icon: "user",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "mail-template",
            name: "SystemMailTemplate",
            meta: {
              title: "邮件模版",
              icon: "education",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "mail-log",
            name: "SystemMailLog",
            meta: {
              title: "邮件记录",
              icon: "log",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "notify",
        name: "Notify",
        meta: {
          title: "站内信管理",
          icon: "message",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "notify-template",
            name: "SystemNotifyTemplate",
            meta: {
              title: "模板管理",
              icon: "education",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "notify-message",
            name: "SystemNotifyMessage",
            meta: {
              title: "消息记录",
              icon: "edit",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "error-code",
        name: "SystemErrorCode",
        meta: {
          title: "错误码管理",
          icon: "code",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "sensitive-word",
        name: "SystemSensitiveWord",
        meta: {
          title: "敏感词管理",
          icon: "education",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "area",
        name: "SystemArea",
        meta: {
          title: "地区管理",
          icon: "row",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/infra",
    name: "/infra",
    meta: {
      title: "基础设施",
      icon: "monitor",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "codegen",
        name: "InfraCodegen",
        meta: {
          title: "代码生成",
          icon: "code",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "demo",
        name: "Demo",
        meta: {
          title: "代码生成案例",
          icon: "ep:aim",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "demo01-contact",
            name: "Demo01Contact",
            meta: {
              title: "单表（增删改查）",
              icon: "ep:bicycle",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "demo02-category",
            name: "Demo02Category",
            meta: {
              title: "树表（增删改查）",
              icon: "fa:tree",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "demo03-normal",
            name: "Demo03StudentNormal",
            meta: {
              title: "主子表（标准）",
              icon: "fa:battery-3",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "demo03-erp",
            name: "Demo03StudentERP",
            meta: {
              title: "主子表（ERP）",
              icon: "ep:calendar",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "demo03-inner",
            name: "Demo03StudentInner",
            meta: {
              title: "主子表（内嵌）",
              icon: "fa:power-off",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "data-source-config",
        name: "InfraDataSourceConfig",
        meta: {
          title: "数据源配置",
          icon: "rate",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "build",
        name: "InfraBuild",
        meta: {
          title: "表单构建",
          icon: "build",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "swagger",
        name: "InfraSwagger",
        meta: {
          title: "系统接口",
          icon: "swagger",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "db-doc",
        name: "InfraDBDoc",
        meta: {
          title: "数据库文档",
          icon: "table",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "file",
        name: "File",
        meta: {
          title: "文件管理",
          icon: "download",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "file-config",
            name: "InfraFileConfig",
            meta: {
              title: "文件配置",
              icon: "config",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "file",
            name: "InfraFile",
            meta: {
              title: "文件列表",
              icon: "upload",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "config",
        name: "InfraConfig",
        meta: {
          title: "配置管理",
          icon: "edit",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "log",
        name: "Log",
        meta: {
          title: "API 日志",
          icon: "log",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "api-access-log",
            name: "InfraApiAccessLog",
            meta: {
              title: "访问日志",
              icon: "log",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "api-error-log",
            name: "InfraApiErrorLog",
            meta: {
              title: "错误日志",
              icon: "log",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "druid",
        name: "InfraDruid",
        meta: {
          title: "MySQL 监控",
          icon: "druid",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "redis",
        name: "InfraRedis",
        meta: {
          title: "Redis 监控",
          icon: "redis",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "admin-server",
        name: "InfraAdminServer",
        meta: {
          title: "Java 监控",
          icon: "server",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "job",
        name: "InfraJob",
        meta: {
          title: "定时任务",
          icon: "job",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "skywalking",
        name: "InfraSkyWalking",
        meta: {
          title: "监控平台",
          icon: "eye-open",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/pay",
    name: "/pay",
    meta: {
      title: "支付管理",
      icon: "money",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "app",
        name: "PayApp",
        meta: {
          title: "应用信息",
          icon: "table",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "order",
        name: "PayOrder",
        meta: {
          title: "支付订单",
          icon: "pay",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "refund",
        name: "PayRefund",
        meta: {
          title: "退款订单",
          icon: "order",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "notify",
        name: "PayNotify",
        meta: {
          title: "回调通知",
          icon: "example",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "demo-order",
        name: "DemoOrder",
        meta: {
          title: "接入示例",
          icon: "drag",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/report",
    name: "/report",
    meta: {
      title: "报表管理",
      icon: "chart",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "jimu-report",
        name: "GoView",
        meta: {
          title: "报表设计器",
          icon: "example",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "go-view",
        name: "JimuReport",
        meta: {
          title: "大屏设计器",
          icon: "dashboard",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/bpm",
    name: "/bpm",
    meta: {
      title: "工作流程",
      icon: "tool",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "manager",
        name: "Manager",
        meta: {
          title: "流程管理",
          icon: "nested",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "form",
            name: "BpmForm",
            meta: {
              title: "流程表单",
              icon: "form",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "user-group",
            name: "BpmUserGroup",
            meta: {
              title: "用户分组",
              icon: "people",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "model",
            name: "BpmModel",
            meta: {
              title: "流程模型",
              icon: "guide",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "task",
        name: "Task",
        meta: {
          title: "任务管理",
          icon: "cascader",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "my",
            name: "BpmProcessInstance",
            meta: {
              title: "我的流程",
              icon: "people",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "todo",
            name: "BpmTodoTask",
            meta: {
              title: "待办任务",
              icon: "eye-open",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "done",
            name: "BpmDoneTask",
            meta: {
              title: "已办任务",
              icon: "eye",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "oa",
        name: "Oa",
        meta: {
          title: "OA 示例",
          icon: "people",
          hidden: false,
          noCache: false,
          alwaysShow: true,
        },
        children: [
          {
            path: "leave",
            name: "BpmOALeave",
            meta: {
              title: "请假查询",
              icon: "user",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/member",
    name: "/member",
    meta: {
      title: "会员中心",
      icon: "ep:bicycle",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "config",
        name: "MemberConfig",
        meta: {
          title: "会员配置",
          icon: "fa:archive",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "user",
        name: "MemberUser",
        meta: {
          title: "会员管理",
          icon: "ep:avatar",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "tag",
        name: "MemberTag",
        meta: {
          title: "会员标签",
          icon: "ep:collection-tag",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "level",
        name: "MemberLevel",
        meta: {
          title: "会员等级",
          icon: "fa:level-up",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "group",
        name: "MemberGroup",
        meta: {
          title: "会员分组",
          icon: "fa:group",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "record",
        name: "PointRecord",
        meta: {
          title: "会员积分",
          icon: "fa:asterisk",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "signin",
        name: "Signin",
        meta: {
          title: "会员签到",
          icon: "ep:alarm-clock",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "config",
            name: "SignInConfig",
            meta: {
              title: "签到配置",
              icon: "ep:calendar",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "record",
            name: "SignInRecord",
            meta: {
              title: "签到记录",
              icon: "ep:chicken",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/mall",
    name: "/mall",
    meta: {
      title: "商城系统",
      icon: "ep:shop",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "home",
        name: "MallHome",
        meta: {
          title: "商城首页",
          icon: "ep:home-filled",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "product",
        name: "Product",
        meta: {
          title: "商品中心",
          icon: "fa:product-hunt",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "spu",
            name: "ProductSpu",
            meta: {
              title: "商品列表",
              icon: "ep:apple",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "category",
            name: "ProductCategory",
            meta: {
              title: "商品分类",
              icon: "ep:cellphone",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "brand",
            name: "ProductBrand",
            meta: {
              title: "商品品牌",
              icon: "ep:chicken",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "property",
            name: "ProductProperty",
            meta: {
              title: "商品属性",
              icon: "ep:cold-drink",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "comment",
            name: "ProductComment",
            meta: {
              title: "商品评论",
              icon: "ep:comment",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
      {
        path: "trade",
        name: "Trade",
        meta: {
          title: "订单中心",
          icon: "ep:eleme",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "config",
            name: "TradeConfig",
            meta: {
              title: "交易配置",
              icon: "ep:setting",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "order",
            name: "TradeOrder",
            meta: {
              title: "订单列表",
              icon: "ep:list",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "after-sale",
            name: "TradeAfterSale",
            meta: {
              title: "售后退款",
              icon: "ep:refrigerator",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "delivery",
            name: "Delivery",
            meta: {
              title: "配送管理",
              icon: "ep:shopping-cart",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "express",
                name: "Express",
                meta: {
                  title: "快递发货",
                  icon: "ep:bicycle",
                  hidden: false,
                  noCache: false,
                  alwaysShow: false,
                },
                children: [
                  {
                    path: "express",
                    name: "Express",
                    meta: {
                      title: "快递公司",
                      icon: "ep:compass",
                      hidden: false,
                      noCache: false,
                      alwaysShow: null,
                    },
                  },
                  {
                    path: "express-template",
                    name: "ExpressTemplate",
                    meta: {
                      title: "运费模版",
                      icon: "ep:coordinate",
                      hidden: false,
                      noCache: false,
                      alwaysShow: null,
                    },
                  },
                ],
              },
              {
                path: "pick-up-store",
                name: "PickUpStore",
                meta: {
                  title: "门店自提",
                  icon: "ep:add-location",
                  hidden: false,
                  noCache: false,
                  alwaysShow: false,
                },
                children: [
                  {
                    path: "pick-up-store",
                    name: "PickUpStore",
                    meta: {
                      title: "门店管理",
                      icon: "ep:basketball",
                      hidden: false,
                      noCache: false,
                      alwaysShow: null,
                    },
                  },
                  {
                    path: "pick-up-order",
                    name: "PickUpOrder",
                    meta: {
                      title: "核销订单",
                      icon: "ep:list",
                      hidden: false,
                      noCache: false,
                      alwaysShow: null,
                    },
                  },
                  {
                    path: "pick-up-order",
                    name: "PickUpOrder",
                    meta: {
                      title: "核销订单",
                      icon: "ep:list",
                      hidden: false,
                      noCache: false,
                      alwaysShow: null,
                    },
                  },
                ],
              },
            ],
          },
          {
            path: "brokerage",
            name: "Brokerage",
            meta: {
              title: "分销管理",
              icon: "fa-solid:project-diagram",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "brokerage-user",
                name: "TradeBrokerageUser",
                meta: {
                  title: "分销用户",
                  icon: "fa-solid:user-tie",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "brokerage-record",
                name: "TradeBrokerageRecord",
                meta: {
                  title: "佣金记录",
                  icon: "fa:money",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "brokerage-withdraw",
                name: "TradeBrokerageWithdraw",
                meta: {
                  title: "佣金提现",
                  icon: "fa:credit-card",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
        ],
      },
      {
        path: "promotion",
        name: "Promotion",
        meta: {
          title: "营销中心",
          icon: "ep:present",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "content",
            name: "Content",
            meta: {
              title: "内容管理",
              icon: "ep:collection",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "article/category",
                name: "ArticleCategory",
                meta: {
                  title: "文章分类",
                  icon: "fa:certificate",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "article",
                name: "Article",
                meta: {
                  title: "文章列表",
                  icon: "ep:connection",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "banner",
                name: "Banner",
                meta: {
                  title: "Banner",
                  icon: "fa:bandcamp",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
          {
            path: "coupon",
            name: "Coupon",
            meta: {
              title: "优惠劵",
              icon: "fa-solid:disease",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "template",
                name: "PromotionCouponTemplate",
                meta: {
                  title: "优惠劵列表",
                  icon: "ep:discount",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "list",
                name: "PromotionCoupon",
                meta: {
                  title: "领取记录",
                  icon: "ep:collection-tag",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
          {
            path: "seckill",
            name: "Seckill",
            meta: {
              title: "秒杀活动",
              icon: "ep:place",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "config",
                name: "PromotionSeckillConfig",
                meta: {
                  title: "秒杀时段",
                  icon: "ep:baseball",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "activity",
                name: "PromotionSeckillActivity",
                meta: {
                  title: "秒杀商品",
                  icon: "ep:basketball",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
          {
            path: "combination",
            name: "Combination",
            meta: {
              title: "拼团活动",
              icon: "fa:group",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "acitivity",
                name: "PromotionCombinationActivity",
                meta: {
                  title: "拼团商品",
                  icon: "ep:apple",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "record",
                name: "PromotionCombinationRecord",
                meta: {
                  title: "拼团记录",
                  icon: "ep:avatar",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
          {
            path: "bargain",
            name: "Bargain",
            meta: {
              title: "砍价活动",
              icon: "ep:box",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "activity",
                name: "PromotionBargainActivity",
                meta: {
                  title: "砍价商品",
                  icon: "ep:burger",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "record",
                name: "PromotionBargainRecord",
                meta: {
                  title: "砍价记录",
                  icon: "ep:list",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
          {
            path: "diy-template",
            name: "DiyTemplate",
            meta: {
              title: "商城装修",
              icon: "fa6-solid:brush",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "diy-template",
                name: "DiyTemplate",
                meta: {
                  title: "装修模板",
                  icon: "fa6-solid:brush",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "diy-page",
                name: "DiyPage",
                meta: {
                  title: "装修页面",
                  icon: "foundation:page-edit",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
          {
            path: "youhui",
            name: "Youhui",
            meta: {
              title: "优惠活动",
              icon: "ep:aim",
              hidden: false,
              noCache: false,
              alwaysShow: false,
            },
            children: [
              {
                path: "discount-activity",
                name: "PromotionDiscountActivity",
                meta: {
                  title: "限时折扣",
                  icon: "ep:timer",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
              {
                path: "reward-activity",
                name: "PromotionRewardActivity",
                meta: {
                  title: "满减送",
                  icon: "ep:goblet-square-full",
                  hidden: false,
                  noCache: false,
                  alwaysShow: null,
                },
              },
            ],
          },
        ],
      },
      {
        path: "statistics",
        name: "Statistics",
        meta: {
          title: "统计中心",
          icon: "ep:data-line",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "member",
            name: "MemberStatistics",
            meta: {
              title: "会员统计",
              icon: "ep:avatar",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "trade",
            name: "TradeStatistics",
            meta: {
              title: "交易统计",
              icon: "fa-solid:credit-card",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/mp",
    name: "/mp",
    meta: {
      title: "公众号管理",
      icon: "wechat",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "account",
        name: "MpAccount",
        meta: {
          title: "账号管理",
          icon: "phone",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "statistics",
        name: "MpStatistics",
        meta: {
          title: "数据统计",
          icon: "chart",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "tag",
        name: "MpTag",
        meta: {
          title: "标签管理",
          icon: "rate",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "user",
        name: "MpUser",
        meta: {
          title: "粉丝管理",
          icon: "people",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "message",
        name: "MpMessage",
        meta: {
          title: "消息管理",
          icon: "email",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "menu",
        name: "MpMenu",
        meta: {
          title: "菜单管理",
          icon: "button",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "auto-reply",
        name: "MpAutoReply",
        meta: {
          title: "自动回复",
          icon: "eye",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "material",
        name: "MpMaterial",
        meta: {
          title: "素材管理",
          icon: "skill",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "draft",
        name: "MpDraft",
        meta: {
          title: "图文草稿箱",
          icon: "edit",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "free-publish",
        name: "MpFreePublish",
        meta: {
          title: "图文发表记录",
          icon: "education",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
    ],
  },
  {
    path: "/crm",
    name: "/crm",
    meta: {
      title: "客户管理系统",
      icon: "ep:avatar",
      hidden: false,
      noCache: false,
      alwaysShow: false,
    },
    children: [
      {
        path: "customer",
        name: "CrmCustomer",
        meta: {
          title: "客户管理",
          icon: "fa:address-book-o",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "clue",
        name: "CrmClue",
        meta: {
          title: "线索管理",
          icon: "fa:pagelines",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "business",
        name: "CrmBusiness",
        meta: {
          title: "商机管理",
          icon: "fa:bus",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "contact",
        name: "Contact",
        meta: {
          title: "联系人管理",
          icon: "fa:address-book-o",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "receivable",
        name: "CrmReceivable",
        meta: {
          title: "回款管理",
          icon: "ep:money",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "receivable-plan",
        name: "CrmReceivablePlan",
        meta: {
          title: "回款计划管理",
          icon: "fa:money",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "contract",
        name: "CrmContract",
        meta: {
          title: "合同管理",
          icon: "ep:notebook",
          hidden: false,
          noCache: false,
          alwaysShow: null,
        },
      },
      {
        path: "config",
        name: "Config",
        meta: {
          title: "系统配置",
          icon: "ep:connection",
          hidden: false,
          noCache: false,
          alwaysShow: false,
        },
        children: [
          {
            path: "customer-pool-config",
            name: "CustomerPoolConf",
            meta: {
              title: "客户公海配置",
              icon: "ep:data-analysis",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
          {
            path: "customer-limit-config",
            name: "CrmCustomerLimitConfig",
            meta: {
              title: "客户限制配置",
              icon: "ep:avatar",
              hidden: false,
              noCache: false,
              alwaysShow: null,
            },
          },
        ],
      },
    ],
  },
];
