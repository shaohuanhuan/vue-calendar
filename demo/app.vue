<template>
  <div class="calendar-container">
    <full-calendar class="test-fc" :events="fcEvents" 
      first-day='1' locale="en"
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick">
        <template slot="fc-event-card" scope="p">
            <p><i class="fa"></i> {{ p.event.title }} test</p>
        </template>
    </full-calendar>
    <el-dialog v-model="dialogVisible">
      <el-input type="text" placeholder="你要写什么" v-model="text"/>
      <el-date-picker
      v-model="rangeDate"
      type="daterange"
      placeholder="选择日期范围">
      </el-date-picker>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
let demoEvents = [
    {
      title    : '1111',
      start    : '2017-06-01',
      end      : '2017-06-02',
      cssClass : 'family'
    },
    {
      title : '2222',
      start : '2017-06-26',
      end : '2017-06-27',
      cssClass : ['home', 'work']
    },
    {
      title : '3333',
      start : '2017-06-27',
      end : '2017-06-28'
    },
    {
        title : '4444',
        start : '2017-06-27',
        end : '2017-06-28'
    },
    {
        title : '5555',
        start : '2017-06-27',
        end : '2017-06-28'
    },
    {
        title : '6666',
        start : '2017-06-26',
        end : '2017-07-05'
    },
    {
        title : '7777',
        start : '2017-07-27',
        end : '2017-07-28'
    },
    {
        title : '8888',
        start : '2017-06-27',
        end : '2017-06-02'
    },
    {
        title : '9999',
        start : '2017-06-27',
        end : '2017-06-28'
    },
  ];

export default {
	data () {
		return {
      name:'Sunny!',
      fcEvents : demoEvents,
      text: '',
      dialogVisible: false,
      currEditDate: null,
      eventDate: '',
      rangeDate: ''
    }
	},
  methods : {
    'changeMonth' (start, end, current) {
      console.log('changeMonth', start.format(), end.format(), current.format())
    },
    'eventClick' (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick' (day, jsEvent) {
      this.dialogVisible = true
      this.eventDate = this.ymdFormat(day) // .format().split('T')[0]
      // this.currEditDate = jsEvent.target
      // console.log(1, this.fcEvents.length)
      // console.log('date', day.format())
      // this.fcEvents.push({title: 'eeeeeeeeeeee', start: day.format().split('T')[0], end: day.format().split('T')[0], isShow: true, cssClass: 'family'})
      // console.log(this.fcEvents)
      // console.log(2, this.fcEvents.length)
      console.log('dayClick', day, jsEvent)
    },
    'moreClick' (day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent)
    },
    save () {
      let start = ''
      let end = ''
      if (this.rangeDate.length) {
        start = this.ymdFormat(this.rangeDate[0])
        end = this.ymdFormat(this.rangeDate[1])
      } else {
        start = this.eventDate
        end = this.eventDate
      }
      this.fcEvents.push({title: this.text, start: start, end: end, isShow: true, cssClass: 'yell-event'})
      this.dialogVisible = false
    },
    ymdFormat (value) {
      if (!value || value === '') {
        return ''
      }
      // 返回处理后的值
      let time = new Date(value)
      let year = time.getFullYear()
      let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
      let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
      return year + '-' + month + '-' + day
    }
  },
  mounted () {
  },
  components : {
    'full-calendar' : require('src/fullCalendar')
  }
}
</script>
<style lang='scss'>
  .app{
    color:green;
  }
  .calendar-container{
    .full-calendar-body .dates {
      .has-month-first{ // week行包含某月1号
        .day-cell{
          border-bottom: 2px solid #d40044;
          box-sizing: border-box;
        }
      }
      .month-first-sun{ // 某月1号刚好在week第一个
         border-top: 2px solid #d40044;
      }
    }
    .full-calendar-body .dates .week-row{
      .month-start{
        border-left: 2px solid #d40044;
        border-top: 2px solid #d40044;
        border-bottom: 0;
      }
      .month-start+.month-start{
        border-left: 0;
      }
    }
    .full-calendar-body .dates .week-row .day-cell{
      padding: 0;
    }
    /*.full-calendar-body .dates .dates-events .events-week .events-day{
      padding: 4px;
    }*/
    .month-first{
      font-size: 20px;
    }
  }
</style>