(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{292:function(p,v,t){"use strict";t.r(v);var _=t(13),a=Object(_.a)({},(function(){var p=this,v=p._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[v("h1",{attrs:{id:"pm2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[p._v("#")]),p._v(" pm2")]),p._v(" "),v("h2",{attrs:{id:"pm2-常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pm2-常用命令"}},[p._v("#")]),p._v(" pm2 常用命令")]),p._v(" "),v("h3",{attrs:{id:"pm2命令使用-项目更目录下使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pm2命令使用-项目更目录下使用"}},[p._v("#")]),p._v(" pm2命令使用（项目更目录下使用）：")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js")]),p._v(" 启动app项目")]),p._v(" "),v("p",[v("code",[p._v("pm2 list")]),p._v(" 列出由pm2管理的所有进程信息，还会显示一个进程会被启动多少次，因为没处理的异常。")]),p._v(" "),v("p",[v("code",[p._v("pm2 monit")]),p._v(" 监视每个node进程的CPU和内存的使用情况")]),p._v(" "),v("p",[v("code",[p._v("pm2 logs")]),p._v(" 显示所有进程日志")]),p._v(" "),v("p",[v("code",[p._v("pm2 stop all")]),p._v(" 停止所有进程")]),p._v(" "),v("p",[v("code",[p._v("pm2 restart all")]),p._v(" 重启所有进程")]),p._v(" "),v("p",[v("code",[p._v("pm2 reload all 0")]),p._v(" 秒停机重载进程 (用于 NETWORKED 进程)")]),p._v(" "),v("p",[v("code",[p._v("pm2 stop 0")]),p._v(" 停止指定的进程")]),p._v(" "),v("p",[v("code",[p._v("pm2 restart 0")]),p._v(" 重启指定的进程")]),p._v(" "),v("p",[v("code",[p._v("pm2 startup")]),p._v(" 产生 init 脚本 保持进程活着")]),p._v(" "),v("p",[v("code",[p._v("pm2 web")]),p._v(" 运行健壮的 computer API endpoint (http://localhost:9615)")]),p._v(" "),v("p",[v("code",[p._v("pm2 delete 0")]),p._v(" 杀死指定的进程")]),p._v(" "),v("p",[v("code",[p._v("pm2 delete all")]),p._v(" 杀死全部进程")]),p._v(" "),v("h3",{attrs:{id:"启动进程的方式详细"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动进程的方式详细"}},[p._v("#")]),p._v(" 启动进程的方式详细：")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js -i max")]),p._v(" 根据有效CPU数目启动最大进程数目")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js -i 3")]),p._v(" 启动3个进程")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js -x")]),p._v(" 用fork模式启动 app.js 而不是使用 cluster")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js -x -- -a 23")]),p._v(" 用fork模式启动 app.js 并且传递参数 (-a 23)")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js --name serverone")]),p._v(" 启动一个进程并把它命名为 serverone")]),p._v(" "),v("p",[v("code",[p._v("pm2 stop serverone")]),p._v(" 停止 serverone 进程")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.json")]),p._v(" 启动进程, 在 app.json里设置选项")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js -i max -- -a 23")]),p._v(" 在--之后给 app.js 传递参数")]),p._v(" "),v("p",[v("code",[p._v("pm2 start app.js -i max -e err.log -o out.log")]),p._v(" 启动 并 生成一个配置文件")])])}),[],!1,null,null,null);v.default=a.exports}}]);