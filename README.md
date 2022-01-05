# mybatis 查询数据日志格式化工具

可以将mybatis 查询数据日志格式化为JSON.

## 样例，如下数据
```
JDBC Connection [org.apache.shardingsphere.shardingjdbc.jdbc.core.connection.ShardingConnection@71aaa6d] will not be managed by Spring
==>  Preparing: SELECT id,order_no,biz_order_no,serve_out_order_no,plan_serve_platform_list,serve_platform_no,serve_carrier_no,serve_supplier_no,serve_order_supplier_no,service_type,car_type,plan_depart_time,book_time,driver_receiving_order_time,driver_arrived_time,start_service_time,end_service_time,cancel_order_time,use_time,status,out_status,real_distance,real_duration,estimate_price_id,estimate_distance,estimate_duration,estimate_price,real_price,real_price_supplier_discount,cancel_cost,cancel_reason_type,cancel_reason,contact,passenger,plan_depart_address,plan_destination_address,real_depart_address,real_destination_address,vehicle_info,flight_info,price_detail,status_log_infos,create_time,create_user_id,update_time,update_user_id,version FROM hcar_order WHERE (order_no = ?)
==> Parameters: E211230182702529012(String)
<==    Columns: id, order_no, biz_order_no, serve_out_order_no, plan_serve_platform_list, serve_platform_no, serve_carrier_no, serve_supplier_no, serve_order_supplier_no, service_type, car_type, plan_depart_time, book_time, driver_receiving_order_time, driver_arrived_time, start_service_time, end_service_time, cancel_order_time, use_time, status, out_status, real_distance, real_duration, estimate_price_id, estimate_distance, estimate_duration, estimate_price, real_price, real_price_supplier_discount, cancel_cost, cancel_reason_type, cancel_reason, contact, passenger, plan_depart_address, plan_destination_address, real_depart_address, real_destination_address, vehicle_info, flight_info, price_detail, status_log_infos, create_time, create_user_id, update_time, update_user_id, version
<==        Row: 404, E211230182702529012, CH20211230182701291028, 3318, <<BLOB>>, P20001, CC, S20001, E211230182702529012_000, 1, 1, 2021-12-30 18:28:02, 2021-12-30 18:27:02.131000, 2021-12-30 18:27:39, null, null, null, null, 2021-12-30 18:28:02, 400, 400, null, null, P20001_S20001_41a8566957dc43f88123628245f50240, 5265.46, 300, 24.00, null, null, null, null, null, <<BLOB>>, <<BLOB>>, <<BLOB>>, <<BLOB>>, <<BLOB>>, <<BLOB>>, <<BLOB>>, <<BLOB>>, <<BLOB>>, <<BLOB>>, 2021-12-30 18:27:02.151000, 7665010767678200295, 2021-12-30 18:27:39.207000, 0, 2
<==      Total: 1
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@66844701]
```

## 格式化后的数据
```
[
  {
    "id": "404",
    "order_no": "E211230182702529012",
    "biz_order_no": "CH20211230182701291028",
    "serve_out_order_no": "3318",
    "plan_serve_platform_list": "<<BLOB>>",
    "serve_platform_no": "P20001",
    "serve_carrier_no": "CC",
    "serve_supplier_no": "S20001",
    "serve_order_supplier_no": "E211230182702529012_000",
    "service_type": "1",
    "car_type": "1",
    "plan_depart_time": "2021-12-30 18:28:02",
    "book_time": "2021-12-30 18:27:02.131000",
    "driver_receiving_order_time": "2021-12-30 18:27:39",
    "driver_arrived_time": "null",
    "start_service_time": "null",
    "end_service_time": "null",
    "cancel_order_time": "null",
    "use_time": "2021-12-30 18:28:02",
    "status": "400",
    "out_status": "400",
    "real_distance": "null",
    "real_duration": "null",
    "estimate_price_id": "P20001_S20001_41a8566957dc43f88123628245f50240",
    "estimate_distance": "5265.46",
    "estimate_duration": "300",
    "estimate_price": "24.00",
    "real_price": "null",
    "real_price_supplier_discount": "null",
    "cancel_cost": "null",
    "cancel_reason_type": "null",
    "cancel_reason": "null",
    "contact": "<<BLOB>>",
    "passenger": "<<BLOB>>",
    "plan_depart_address": "<<BLOB>>",
    "plan_destination_address": "<<BLOB>>",
    "real_depart_address": "<<BLOB>>",
    "real_destination_address": "<<BLOB>>",
    "vehicle_info": "<<BLOB>>",
    "flight_info": "<<BLOB>>",
    "price_detail": "<<BLOB>>",
    "status_log_infos": "<<BLOB>>",
    "create_time": "2021-12-30 18:27:02.151000",
    "create_user_id": "7665010767678200295",
    "update_time": "2021-12-30 18:27:39.207000",
    "update_user_id": "0",
    "version": "2"
  }
]
```

## 使用方法

* vscode 安装本插件
* 选择你要格式化的文本
* 按快捷键 `Ctrl+Shift+P`
* 输入命令 `mybatis log format`
* 回车，完成格式化


