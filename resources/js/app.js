
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    methods: {
        destroyPackageItem(pid, iid) {
            if (! confirm('当前操作：删除菜品关联，确定?')) {
                return 0;
            }

            var url = "/package/"+pid+"/item/" + iid;
            axios
                .delete(url)
                .then(res => {
                    if (res.data.code) {
                        return alert(res.data.message);
                    }
                    alert(res.data.message);
                    setTimeout(() => {
                        window.location.reload();
                    }, 500)
                });
        }
    }
});



// 页面相关代码
class App {

    constructor() {
        this.initSelect2();
        this.initFlatpickr();
        this.initSlider();
    }
    // 创建图表
    createChart(el, labels, data, type = 'line') {
        if($(el).length <= 0) {
            return this.__error();
        }

        return (new Chart(el, {
            type: type,
            data: {
                labels: labels,
                datasets: data
            },
            options: {
                maintainAspectRatio: false,
                scales: { yAxes: [{ ticks: { beginAtZero: true }}] },
            }
        }));
    }

    // Select2 组件初始化
    initSelect2() {
        $('.select2-single').each((index, el) => {
            $(el).select2({ placeholder: '请选择' });
        });

        $('.select2-multiple').each((index, el) => {
            $(el).select2({ placeholder: '请选择' });
        });

        $('.select2').each((index, el) => {
            $(el).on('change', function (e) {
                this.deviceTypeAdd = e.val;
            });
        });
    }

    // iOS 风格复选框组件
    createCheckBox(el, size, color, jackColor) {
        if($(el).length <= 0) {
            return this.__error();
        }

        return (new Switchery(el, { size: size, color: color, jackColor: jackColor }));
    }

    // 日期插件
    initFlatpickr() {
        let el = $('.flatpickr-datetime');

        $(el).flatpickr({
            dateFormat: 'Y-m-d H:i',
            enableTime: true,
            time_24hr: true,
            locale: Object.assign({}, flatpickr.l10ns.default, {
                weekdays: {
                    shorthand: ["日", "一", "二", "三", "四", "五", "六"],
                },
                rangeSeparator: " - "
            }),
            disableMobile: true
        })

        $(".flatpickr-time").flatpickr({
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
            locale: Object.assign({}, flatpickr.l10ns.default, {
                weekdays: {
                    shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                },
                rangeSeparator: " - "
            }),
            disableMobile: true
        })
    }

    // 滑动选择器
    initSlider() {

        $('.ion-slider-single').ionRangeSlider({
            min: 1,
            max: 100,
            grid: true,
            skin: "round",
            // grid_margin:true,
        });

        $('.ion-slider-double').ionRangeSlider({
            type: 'double',
            min: 1,
            max: 5,
            grid: true,
            from: 1,
            to: 3,
            skin: "round",
            // grid_margin:true,
        });
    }

    __error(message = 'elements not found.') {
        console.debug(message);
    }
}

// 延迟执行
$(() => {

    // Functions
    function getObjectURL(file) {
        var url = null ;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }

    // End Functions
    var page = new App();

    // Listeners
    // 图片选择器， 回显本地图片
    $('input[name=cover]').change(e => {
        if(url = getObjectURL(e.target.files[0])) {
            $('.cover-box').css("background-image","url("+url+")");
        }
    });

    // Chart
    let labels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    let users = document.getElementById("area-users-chart");
    let orders = document.getElementById("area-orders-chart");
    let vip = document.getElementById("area-vip-chart");

    page.createChart(users, labels, [
        {
            label: '苹果',
            borderWidth: 1,
            backgroundColor: 'rgba(17, 72, 211, 1)',
            pointRadius: 5,
            data: [1113, 12, 3, 1120, 678, 932, 122]
        },
        {
            label: '安卓',
            borderWidth: 1,
            backgroundColor: 'rgba(87, 228, 198, 0.6)',
            pointRadius: 5,
            data: [3, 112, 1113, 12, 56, 78, 44, 56]
        },
        {
            label: 'WAP',
            borderWidth: 1,
            backgroundColor: 'rgba(87, 28, 198, 0.6)',
            pointRadius: 5,
            data: [3, 12, 83, 12, 90, 88, 9999, 10345]
        }
    ]);
    page.createChart(orders, labels, [
        {
            label: '订单',
            borderWidth: 1,
            backgroundColor: 'rgba(17, 72, 211, 1)',
            pointRadius: 5,
            data: [634, 435, 6675, 3422, 4000, 89888, 0]
        }
    ]);
    page.createChart(vip, labels, [{
        label: '会员',
        borderWidth: 1,
        backgroundColor: 'rgba(17, 72, 211, 1)',
        pointRadius: 5,
        data: [2013, 12, 13, 112, 99, 899, 1024]
    }]);

    $(".loading").click(function(){
        $(this).button('loading').delay(1000).queue(function() {
            $(this).button('reset');
            $(this).dequeue();
        });
    });


    // 菜品图标上传
    $('input[name=resource-min]').change(() => {
        $('form[name=prudect-resource-min]').submit();
    });
    $('input[name=resource-middle]').change(() => {
        $('form[name=prudect-resource-middle]').submit();
    });
    $('input[name=resource-large]').change(() => {
        $('form[name=prudect-resource-large]').submit();
    });

    $('select[name=city_id]').change(function (e) {
        url = "/region/1/" + $(this).val();
        axios.get(url)
            .then(res => {
                if (res.data.code == 2000) {
                    html = "";
                    res.data.data.forEach(item => {
                        html += "<option value=" + item.id + ">" + item.name + "</option>"
                    })
                    $('select[name=town_id]').html('')
                    $('select[name=town_id]').html(html)
                }
            });
    });
});