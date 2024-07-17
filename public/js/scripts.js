$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#rg').mask('00.000.000-0');
    $('#tel').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#crm').mask('0000000/AA');

    $('.btnNovoPaciente').click(function () {
        $('#modalNovoPaciente').modal('show');
    });
    $('.btnDetalhesPaciente').click(function () {
        $('#modalDetalhesPaciente').modal('show');
    });
    $('.btnEditarPaciente').click(function () {
        $('#modalEditarPaciente').modal('show');
    });
    $('.btnExcluirPaciente').click(function () {
        $('#modalExcluirPaciente').modal('show');
    });

    $('.btnNovoMedico').click(function () {
        $('#modalNovoMedico').modal('show');
    });
    $('.btnDetalhesMedico').click(function () {
        $('#modalDetalhesMedico').modal('show');
    });
    $('.btnEditarMedico').click(function () {
        $('#modalEditarMedico').modal('show');
    });
    $('.btnExcluirMedico').click(function () {
        $('#modalExcluirMedico').modal('show');
    });

    $('.btnNovoRecepcionista').click(function () {
        $('#modalNovoRecepcionista').modal('show');
    });
    $('.btnDetalhesRecepcionista').click(function () {
        $('#modalDetalhesRecepcionista').modal('show');
    });
    $('.btnEditarRecepcionista').click(function () {
        $('#modalEditarRecepcionista').modal('show');
    });
    $('.btnExcluirRecepcionista').click(function () {
        $('#modalExcluirRecepcionista').modal('show');
    });

    $('.btnNovoFinanceiro').click(function () {
        $('#modalNovoFinanceiro').modal('show');
    });
    $('.btnDetalhesFinanceiro').click(function () {
        $('#modalDetalhesFinanceiro').modal('show');
    });
    $('.btnEditarFinanceiro').click(function () {
        $('#modalEditarFinanceiro').modal('show');
    });
    $('.btnExcluirFinanceiro').click(function () {
        $('#modalExcluirFinanceiro').modal('show');
    });

    $('.btnEditarSenha').click(function () {
        $('#modalEditarSenha').modal('show');
    });

    $('input[name="dias-semana"]').on('click', function () {
        let dia = $(this).attr('id');
        let divPeriodos = $('#' + dia + '-periodos');
        if ($(this).is(':checked')) {
            divPeriodos.show();
        } else {
            divPeriodos.hide();
        }
    });

    $('input[name="dias-semana-editar"]').on('click', function () {
        let dia = $(this).attr('id');
        let divPeriodos = $('#' + dia + '-periodos-editar');
        if ($(this).is(':checked')) {
            divPeriodos.show();
        } else {
            divPeriodos.hide();
        }
    });

    $('#despesa-fixa').change(function () {
        if ($(this).is(':checked')) {
            $('#recorrencia-despesa').removeClass('d-none');
        } else {
            $('#recorrencia-despesa').addClass('d-none');
        }
    });
    $('#despesa-fixa-editar').change(function () {
        if ($(this).is(':checked')) {
            $('#recorrencia-despesa-editar').removeClass('d-none');
        } else {
            $('#recorrencia-despesa-editar').addClass('d-none');
        }
    });
});

$(document).ready(function () {
    $('.btnIniciarConsulta').click(function () {
        $('#modalIniciarConsulta').modal('show');
    });

    $('.btnDetalhesConsulta').click(function () {
        $('#modalDetalhesConsulta').modal('show');
    });

    $('.btnEditarConsulta').click(function () {
        $('#modalEditarConsulta').modal('show');
    });

    $('.btnProntuarioPaciente').click(function () {
        $('#modalProntuarioPaciente').modal('show');
    });

    $('.btnEditarAcesso').click(function () {
        $('#modalEditarAcesso').modal('show');
    });
});

$(document).ready(function () {
    moment.locale('pt');

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#filtroDataFinanceiro span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
        $('#periodoDataRelatorioDados span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
        $('#periodoDataRelatorioConsultas span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
        $('#filtroDataRelatorio span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
    }

    $('#filtroDataFinanceiro, #periodoDataRelatorioDados, #periodoDataRelatorioConsultas, #filtroDataRelatorio').daterangepicker({
        startDate: start,
        endDate: end,
        locale: {
            format: 'DD/MM/YYYY',
            separator: ' - ',
            applyLabel: 'Aplicar',
            cancelLabel: 'Cancelar',
            fromLabel: 'De',
            toLabel: 'Para',
            customRangeLabel: 'Data Personalizada',
            weekLabel: 'W',
            daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            firstDay: 1
        },
        ranges: {
            'Hoje': [moment(), moment()],
            'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
            'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
            'Este Mês': [moment().startOf('month'), moment().endOf('month')],
            'Mês Passado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);
});

$(document).ready(function () {
    var ctx = $("#grafico-consultas");
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                label: "Consultas",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [560, 475, 649, 591, 33],
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 22,
                    top: 2,
                    bottom: 8
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'month'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    },
                    maxBarThickness: 25,
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5,
                        padding: 10
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10
            },
        }
    });
});

$(document).ready(function () {
    var ctx = $("#grafico-medico-consultas");
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                label: "Consultas",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [114, 121, 167, 192, 79],
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 22,
                    top: 2,
                    bottom: 8
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'month'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    },
                    maxBarThickness: 25,
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5,
                        padding: 10
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10
            },
        }
    });
});

$(document).ready(function () {
    var ctx = $("#grafico-financeiro-despesas");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Despesa Fixa", "Despesa Variável"],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        },
    });
});

$(document).ready(function () {
    var ctx = $("#grafico-medico-pacientes");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Homem", "Mulher"],
            datasets: [{
                data: [46, 54],
                backgroundColor: ['#abdbe3', '#e3abdb'],
                hoverBackgroundColor: ['#9ac5cc', '#cc9ac5'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        },
    });
});

$(document).ready(function () {
    var ctx = $("#grafico-financeiro-entradas");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                label: "Entradas",
                lineTension: 0.3,
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [7230, 9145, 10650, 8260, 1890],
            },
            {
                label: "Saídas",
                lineTension: 0.3,
                backgroundColor: "#e74a3b",
                hoverBackgroundColor: "#e74a3b",
                borderColor: "#e74a3b",
                pointRadius: 3,
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                pointBorderColor: "rgba(255, 99, 132, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
                pointHoverBorderColor: "rgba(255, 99, 132, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [6125, 7300, 7980, 6490, 430],
            }]
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 6,
                    bottom: 2
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 5,
                        padding: 10,
                        callback: function (value, index, values) {
                            return '$' + number_format(value);
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
                    }
                }
            }
        }
    });
});

$(document).ready(function () {
    moment.updateLocale('pt-br', {
        weekdaysMin: ["D", "Seg", "Ter", "Qua", "Qui", "Sex", "S"]
    });

    var currentDate = moment();

    $('#calendario-agenda').datetimepicker({
        inline: true,
        sideBySide: true,
        locale: 'pt-br',
        format: 'DD/MM/YYYY',
        icons: {
            next: 'fa fa-angle-right',
            previous: 'fa fa-angle-left'
        },
        defaultDate: currentDate
    });

    var currentDateElement = document.getElementById("data-atual");
    var currentDayOfWeekElement = document.getElementById("dia-semana-atual");
    var formattedDate = currentDate.format('DD [de] MMMM [de] YYYY');
    var dayOfWeek = currentDate.format('dddd');

    $('#data-atual').text(formattedDate);
    $('#dia-semana-atual').text(dayOfWeek);

    $('#calendario-agenda').on('dp.change', function (e) {
        var selectedDate = e.date.format('DD [de] MMMM [de] YYYY');
        var selectedDayOfWeek = e.date.format('dddd');

        currentDateElement.textContent = selectedDate;
        currentDayOfWeekElement.textContent = selectedDayOfWeek;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario-dashboard');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        initialView: 'dayGridWeek',
        height: 180,
        locale: 'pt-br',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridWeek,dayGridDay'
        },
        buttonText: {
            day: 'Dia',
            week: 'Semana'
        },
        viewDidMount: function () {
            var todayHeaderCell = document.querySelector('.fc-col-header-cell.fc-day-today');
            if (todayHeaderCell) {
                todayHeaderCell.classList.add('today-header');
            }
        },
        allDayDefault: true,
        events: [
            {
                title: '10 AGENDAMENTOS  ',
                start: '2024-05-10',
                allDay: true
            },
            {
                title: '8 AGENDAMENTOS  ',
                start: '2024-05-13',
                allDay: true
            },
            {
                title: '11 AGENDAMENTOS  ',
                start: '2024-05-14',
                allDay: true
            }
        ]
    });

    $('#calendario-dashboard').css('font-size', '0.92rem');

    calendar.render();
});

document.addEventListener('DOMContentLoaded', function () {
    var dataInput = document.getElementById('data-consulta');
    var dataAtual = new Date().toISOString().split('T')[0];
    dataInput.value = dataAtual;
});

document.addEventListener('DOMContentLoaded', function () {
    function formatarData(data) {
        const dia = String(data.getUTCDate()).padStart(2, '0');
        const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
        const ano = data.getUTCFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    function dataPorExtenso(data) {
        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const dia = data.getUTCDate();
        const mes = meses[data.getUTCMonth()];
        const ano = data.getUTCFullYear();
        return `${dia} de ${mes} de ${ano}`;
    }

    function atualizarData() {
        const dataInput = document.getElementById('data-consulta');
        const dataSelecionada = new Date(dataInput.value);
        const textoDataFormatada = formatarData(dataSelecionada);
        const textoDataPorExtenso = dataPorExtenso(dataSelecionada);

        const h6Data = document.getElementById('data-calendario-consulta');
        h6Data.textContent = textoDataPorExtenso;

        const dataColunas = document.getElementsByClassName('data-coluna-consulta');
        for (let i = 0; i < dataColunas.length; i++) {
            dataColunas[i].innerHTML = `${textoDataFormatada}`;
        }
    }

    document.getElementById('data-consulta').addEventListener('change', atualizarData);

    atualizarData();
})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("plano-sim-novo").addEventListener("click", function () {
        document.getElementById("info-plano-saude-novo").style.display = "block";
    });
    document.getElementById("plano-sim-editar").addEventListener("click", function () {
        document.getElementById("info-plano-saude-editar").style.display = "block";
    });
    document.getElementById("plano-nao-novo").addEventListener("click", function () {
        document.getElementById("info-plano-saude-novo").style.display = "none";
    });
    document.getElementById("plano-nao-editar").addEventListener("click", function () {
        document.getElementById("info-plano-saude-editar").style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("alergia-sim").addEventListener("click", function () {
        document.getElementById("info-alergia-medicamentos").style.display = "block";
    });
    document.getElementById("alergia-nao").addEventListener("click", function () {
        document.getElementById("info-alergia-medicamentos").style.display = "none";
    });

    document.getElementById("cirurgia-sim").addEventListener("click", function () {
        document.getElementById("info-cirurgia").style.display = "block";
    });
    document.getElementById("cirurgia-nao").addEventListener("click", function () {
        document.getElementById("info-cirurgia").style.display = "none";
    });

    document.getElementById("medicamento-sim").addEventListener("click", function () {
        document.getElementById("info-medicamento-regular").style.display = "block";
    });
    document.getElementById("medicamento-nao").addEventListener("click", function () {
        document.getElementById("info-medicamento-regular").style.display = "none";
    });

    document.getElementById("condicao-sim").addEventListener("click", function () {
        document.getElementById("info-condicao-preexistente").style.display = "block";
    });
    document.getElementById("condicao-nao").addEventListener("click", function () {
        document.getElementById("info-condicao-preexistente").style.display = "none";
    });

    document.getElementById("vicio-sim").addEventListener("click", function () {
        document.getElementById("info-vicio").style.display = "block";
    });
    document.getElementById("vicio-nao").addEventListener("click", function () {
        document.getElementById("info-vicio").style.display = "none";
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("editar-alergia-sim").addEventListener("click", function () {
        document.getElementById("info-editar-alergia-medicamentos").style.display = "block";
    });
    document.getElementById("editar-alergia-nao").addEventListener("click", function () {
        document.getElementById("info-editar-alergia-medicamentos").style.display = "none";
    });

    document.getElementById("editar-cirurgia-sim").addEventListener("click", function () {
        document.getElementById("info-editar-cirurgia").style.display = "block";
    });
    document.getElementById("editar-cirurgia-nao").addEventListener("click", function () {
        document.getElementById("info-editar-cirurgia").style.display = "none";
    });

    document.getElementById("editar-medicamento-sim").addEventListener("click", function () {
        document.getElementById("info-editar-medicamento-regular").style.display = "block";
    });
    document.getElementById("editar-medicamento-nao").addEventListener("click", function () {
        document.getElementById("info-editar-medicamento-regular").style.display = "none";
    });

    document.getElementById("editar-condicao-sim").addEventListener("click", function () {
        document.getElementById("info-editar-condicao-preexistente").style.display = "block";
    });
    document.getElementById("editar-condicao-nao").addEventListener("click", function () {
        document.getElementById("info-editar-condicao-preexistente").style.display = "none";
    });

    document.getElementById("editar-vicio-sim").addEventListener("click", function () {
        document.getElementById("info-editar-vicio").style.display = "block";
    });
    document.getElementById("editar-vicio-nao").addEventListener("click", function () {
        document.getElementById("info-editar-vicio").style.display = "none";
    });
    
});

$(document).ready(function () {
    $('#nav-anamnese-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#anamneseEditor').data('quill')) {
                var quill = new Quill('#anamneseEditor', {
                    theme: 'snow'
                });
                $('#anamneseEditor').data('quill', quill);
            }
        }, 200);
    });
    $('#nav-diagnostico-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#diagnosticoEditor').data('quill')) {
                var quill = new Quill('#diagnosticoEditor', {
                    theme: 'snow'
                });
                $('#diagnosticoEditor').data('quill', quill);
            }
        }, 200);
    });
    $('#nav-prescricoes-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#prescricoesEditor').data('quill')) {
                var quill = new Quill('#prescricoesEditor', {
                    theme: 'snow'
                });
                $('#prescricoesEditor').data('quill', quill);
            }
        }, 200);
    });
    $('#nav-exames-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#examesEditor').data('quill')) {
                var quill = new Quill('#examesEditor', {
                    theme: 'snow'
                });
                $('#examesEditor').data('quill', quill);
            }
        }, 200);
    });
    $('#nav-atestados-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#atestadosEditor').data('quill')) {
                var quill = new Quill('#atestadosEditor', {
                    theme: 'snow'
                });
                $('#atestadosEditor').data('quill', quill);
            }
        }, 200);
    });
});

$(document).ready(function () {
    $('#nav-detalhes-anamnese-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#anamneseDetalhesEditor').data('quill')) {
                var quill = new Quill('#anamneseDetalhesEditor', {
                    theme: 'snow',
                    readOnly: true
                });
                $('#anamneseDetalhesEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-detalhes-diagnostico-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#diagnosticoDetalhesEditor').data('quill')) {
                var quill = new Quill('#diagnosticoDetalhesEditor', {
                    theme: 'snow',
                    readOnly: true
                });
                $('#diagnosticoDetalhesEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-detalhes-prescricoes-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#prescricoesDetalhesEditor').data('quill')) {
                var quill = new Quill('#prescricoesDetalhesEditor', {
                    theme: 'snow',
                    readOnly: true
                });
                $('#prescricoesDetalhesEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-detalhes-exames-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#examesDetalhesEditor').data('quill')) {
                var quill = new Quill('#examesDetalhesEditor', {
                    theme: 'snow',
                    readOnly: true
                });
                $('#examesDetalhesEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-detalhes-atestados-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#atestadosDetalhesEditor').data('quill')) {
                var quill = new Quill('#atestadosDetalhesEditor', {
                    theme: 'snow',
                    readOnly: true
                });
                $('#atestadosDetalhesEditor').data('quill', quill);
            }
        }, 200);
    });
});  

$(document).ready(function () {
    $('#nav-editar-anamnese-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#anamneseEditarEditor').data('quill')) {
                var quill = new Quill('#anamneseEditarEditor', {
                    theme: 'snow'
                });
                $('#anamneseEditarEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-editar-diagnostico-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#diagnosticoEditarEditor').data('quill')) {
                var quill = new Quill('#diagnosticoEditarEditor', {
                    theme: 'snow'
                });
                $('#diagnosticoEditarEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-editar-prescricoes-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#prescricoesEditarEditor').data('quill')) {
                var quill = new Quill('#prescricoesEditarEditor', {
                    theme: 'snow'
                });
                $('#prescricoesEditarEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-editar-exames-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#examesEditarEditor').data('quill')) {
                var quill = new Quill('#examesEditarEditor', {
                    theme: 'snow'
                });
                $('#examesEditarEditor').data('quill', quill);
            }
        }, 200);
    });

    $('#nav-editar-atestados-tab').on('click', function () {
        setTimeout(function () {
            if (!$('#atestadosEditarEditor').data('quill')) {
                var quill = new Quill('#atestadosEditarEditor', {
                    theme: 'snow'
                });
                $('#atestadosEditarEditor').data('quill', quill);
            }
        }, 200);
    });
});

$(document).ready(function () {
    $('#especialidades').tagsinput({
        tagClass: 'badge'
    });

    $('#atuacao').tagsinput({
        tagClass: 'badge'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const senhaAtualInput = document.getElementById('senha-atual');
    const novaSenhaInput = document.getElementById('nova-senha');
    const confirmNovaSenhaInput = document.getElementById('confirm-nova-senha');

    const mostrarSenhaAtualBtn = document.getElementById('mostrarSenhaAtual');
    const mostrarNovaSenhaBtn = document.getElementById('mostrarNovaSenha');
    const mostrarConfirmNovaSenhaBtn = document.getElementById('mostrarConfirmNovaSenha');

    function togglePasswordVisibility(inputField, toggleButton) {
        if (inputField.type === 'password') {
            inputField.type = 'text';
            toggleButton.innerHTML = '<ion-icon name="eye-off-outline" class="pt-2 px-1 font-nome-agenda"></ion-icon>';
        } else {
            inputField.type = 'password';
            toggleButton.innerHTML = '<ion-icon name="eye-outline" class="pt-2 px-1 font-nome-agenda"></ion-icon>';
        }
    }

    mostrarSenhaAtualBtn.addEventListener('click', function () {
        togglePasswordVisibility(senhaAtualInput, mostrarSenhaAtualBtn);
    });

    mostrarNovaSenhaBtn.addEventListener('click', function () {
        togglePasswordVisibility(novaSenhaInput, mostrarNovaSenhaBtn);
    });

    mostrarConfirmNovaSenhaBtn.addEventListener('click', function () {
        togglePasswordVisibility(confirmNovaSenhaInput, mostrarConfirmNovaSenhaBtn);
    });
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* API DO CID
$(document).ready(function() {
    var apiUrl = 'https://api.example.com/cid'; 

    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var select = $('#cidSelect');
            $.each(data, function(index, item) {
                select.append($('<option></option>').val(item.code).text(item.description));
            });
        },
        error: function() {
            alert('Erro ao carregar a lista de CID.');
        }
    });
});
*/