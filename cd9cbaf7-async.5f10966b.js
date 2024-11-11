(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["cd9cbaf7"],{cd9cbaf7:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return n;}}),t("b70956b1");let n=[{value:"By default, Ant Design uses ",paraId:0},{value:"Day.js",paraId:0},{value:" to handle time and date. Day.js is an immutable date-time library alternative to Moment.js with the same API.",paraId:0},{value:"You might want to use another date library (",paraId:1},{value:"Ant design currently supports ",paraId:1},{value:"moment",paraId:1},{value:", ",paraId:1},{value:"date-fns",paraId:1},{value:", and ",paraId:1},{value:"luxon",paraId:1},{value:"). We provide two ways to customize:",paraId:1},{value:"The first way is to use ",paraId:2,tocIndex:0},{value:"generatePicker",paraId:2,tocIndex:0},{value:" (or ",paraId:2,tocIndex:0},{value:"generateCalendar",paraId:2,tocIndex:0},{value:") to help create Picker components.",paraId:2,tocIndex:0},{value:"First, we initialize an antd demo with ",paraId:3,tocIndex:0},{value:"create-react-app",paraId:3,tocIndex:0},{value:". You can refer to ",paraId:3,tocIndex:0},{value:"Usage with create-react-app",paraId:4,tocIndex:0},{value:", or you can start directly here ",paraId:3,tocIndex:0},{value:"init antd",paraId:3,tocIndex:0},{value:"Create ",paraId:5,tocIndex:1},{value:"src/components/DatePicker.tsx",paraId:5,tocIndex:1},{value:".",paraId:5,tocIndex:1},{value:"For example:",paraId:6,tocIndex:1},{value:"import { DatePicker } from 'antd';\nimport type { Moment } from 'moment';\nimport momentGenerateConfig from 'rc-picker/lib/generate/moment';\n\nconst MyDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);\n\nexport default MyDatePicker;\n",paraId:7,tocIndex:1},{value:"Create ",paraId:8,tocIndex:2},{value:"src/components/TimePicker.tsx",paraId:8,tocIndex:2},{value:".",paraId:8,tocIndex:2},{value:"For example:",paraId:9,tocIndex:2},{value:"import * as React from 'react';\nimport type { PickerTimeProps } from 'antd/es/date-picker/generatePicker';\nimport type { Moment } from 'moment';\n\nimport DatePicker from './DatePicker';\n\nexport interface TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {}\n\nconst TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (\n  <DatePicker {...props} picker=\"time\" mode={undefined} ref={ref} />\n));\n\nTimePicker.displayName = 'TimePicker';\n\nexport default TimePicker;\n",paraId:10,tocIndex:2},{value:"Create ",paraId:11,tocIndex:3},{value:"src/components/Calendar.tsx",paraId:11,tocIndex:3},{value:".",paraId:11,tocIndex:3},{value:"For example:",paraId:12,tocIndex:3},{value:"import { Calendar } from 'antd';\nimport type { Moment } from 'moment';\nimport momentGenerateConfig from 'rc-picker/es/generate/moment';\n\nconst MyCalendar = Calendar.generateCalendar<Moment>(momentGenerateConfig);\n\nexport default MyCalendar;\n",paraId:13,tocIndex:3},{value:"Create ",paraId:14,tocIndex:4},{value:"src/components/index.tsx",paraId:14,tocIndex:4},{value:".",paraId:14,tocIndex:4},{value:"For example:",paraId:15,tocIndex:4},{value:"export { default as Calendar } from './Calendar';\nexport { default as DatePicker } from './DatePicker';\nexport { default as TimePicker } from './TimePicker';\n",paraId:16,tocIndex:4},{value:"Modify ",paraId:17,tocIndex:5},{value:"src/App.tsx",paraId:17,tocIndex:5},{value:",import ",paraId:17,tocIndex:5},{value:"moment",paraId:17,tocIndex:5},{value:" and custom component.",paraId:17,tocIndex:5},{value:"- import { DatePicker, Calendar } from 'antd';\n- import format from 'dayjs';\n\n+ import { DatePicker, TimePicker, Calendar } from './components';\n+ import format from 'moment';\n",paraId:18,tocIndex:5},{value:"We also provide another implementation, which we provide with ",paraId:19,tocIndex:6},{value:"@ant-design/moment-webpack-plugin",paraId:19,tocIndex:6},{value:", replacing ",paraId:19,tocIndex:6},{value:"Day.js",paraId:19,tocIndex:6},{value:" with ",paraId:19,tocIndex:6},{value:"moment",paraId:19,tocIndex:6},{value:" directly without changing a line of existing code. More info can be found at ",paraId:19,tocIndex:6},{value:"@ant-design/moment-webpack-plugin",paraId:19,tocIndex:6},{value:".",paraId:19,tocIndex:6},{value:"// webpack-config.js\nconst AntdMomentWebpackPlugin = require('@ant-design/moment-webpack-plugin');\n\nmodule.exports = {\n  // ...\n  plugins: [new AntdMomentWebpackPlugin()],\n};\n",paraId:20,tocIndex:6},{value:"date-fns",paraId:21,tocIndex:7},{value:" currently supports custom component methods similar to ",paraId:21,tocIndex:7},{value:"dayjs",paraId:21,tocIndex:7},{value:". The difference is that the parameter types used are different. Support is provided in antd 4.5.0 and above.",paraId:21,tocIndex:7},{value:"For Example:",paraId:22,tocIndex:7},{value:"Create ",paraId:23,tocIndex:8},{value:"src/components/DatePicker.tsx",paraId:23,tocIndex:8},{value:".",paraId:23,tocIndex:8},{value:"Code as follows:",paraId:24,tocIndex:8},{value:"import { DatePicker } from 'antd';\nimport dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';\n\nconst MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);\n\nexport default MyDatePicker;\n",paraId:25,tocIndex:8},{value:"Since ",paraId:26,tocIndex:9},{value:"antd 5.4.0",paraId:26,tocIndex:9},{value:", ",paraId:26,tocIndex:9},{value:"luxon",paraId:26,tocIndex:9},{value:" can be used instead of ",paraId:26,tocIndex:9},{value:"dayjs",paraId:26,tocIndex:9},{value:" and supports the same functionality, but it does introduce some differences in behavior that we will explain below.",paraId:26,tocIndex:9},{value:"Create a ",paraId:27,tocIndex:10},{value:"src/components/DatePicker.tsx",paraId:27,tocIndex:10},{value:" file, and implement the luxon based picker as follows:",paraId:27,tocIndex:10},{value:"import { DatePicker } from 'antd';\nimport type { DateTime } from 'luxon';\nimport luxonGenerateConfig from 'rc-picker/lib/generate/luxon';\n\nconst MyDatePicker = DatePicker.generatePicker<DateTime>(luxonGenerateConfig);\n\nexport default MyDatePicker;\n",paraId:28,tocIndex:10},{value:"luxon users should be familiar with the fact that it does not come with a custom implementation for localization. Instead, it relies on the browser's native ",paraId:29,tocIndex:11},{value:"Intl API",paraId:29,tocIndex:11},{value:".",paraId:29,tocIndex:11},{value:"This introduces some formatting differences with the other date libraries. As of today, the main differences are:",paraId:30,tocIndex:11},{value:"First day of the week is always Monday regardless of locale.",paraId:31,tocIndex:11},{value:"Week of year number is sometimes different (ISO week rules are used to determine it).",paraId:31,tocIndex:11},{value:"Short week days format will sometimes be different for custom locales (it might have 3 characters instead of 2).",paraId:31,tocIndex:11},{value:'Selected week label format will be slightly different (e.g. "2021-01" instead of "2021-1st").',paraId:31,tocIndex:11},{value:"It is possible to customize these default luxon behaviors by adjusting the luxon config:",paraId:32,tocIndex:11},{value:"import { DatePicker } from 'antd';\nimport type { DateTime } from 'luxon';\nimport luxonGenerateConfig from 'rc-picker/lib/generate/luxon';\n\nconst customLuxonConfig = {\n  ...luxonGenerateConfig,\n  getWeekFirstDay(locale) {\n    // Your custom implementation goes here\n  },\n};\n\nconst MyDatePicker = DatePicker.generatePicker<DateTime>(customLuxonConfig);\n\nexport default MyDatePicker;\n",paraId:33,tocIndex:11},{value:"Note that by doing such customization, the resulting DatePicker behavior might be altered in unexpected ways, so make sure you are testing for edge cases.",paraId:34,tocIndex:11}];}}]);