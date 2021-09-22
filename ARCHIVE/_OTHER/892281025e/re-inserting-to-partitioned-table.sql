begin;
    insert into table select * from only table where id between 1 and 10000000;
    delete from only table where id between 1 and 10000000;
commit;

begin;
    insert into table select * from only table where id between 10000001 and 20000000;
    delete from only table where id between 10000001 and 20000000;
commit; 