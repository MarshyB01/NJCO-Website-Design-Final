document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    //const dataParagraph = document.querySelector('.data');
    const statisticsTableBody = document.querySelector('#statistics-table tbody');

    const stateStatistics = {
        AL: [
            { statistic: 'State', value: 'Alabama' },
            { statistic: 'Biofuel', value: '5,258,395,789.37' },
            { statistic: 'Solar Energy', value: '91,600.00' },
            { statistic: 'Nuclear Energy', value: '45,579,039,000.00' },
            
        ],
        AK: [
            { statistic: 'State', value: 'Alaska' },
            { statistic: 'Biofuel', value: '0.00' },
            { statistic: 'Solar Energy', value: '1,600.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        AZ: [
            { statistic: 'State', value: 'Arizona' },
            { statistic: 'Biofuel', value: '3,556,165.20' },
            { statistic: 'Solar Energy', value: '1,036,700.00' },
            { statistic: 'Nuclear Energy', value: '31,522,590,000.00' }
        ],
        AR: [
            { statistic: 'State', value: 'Arkansas' },
            { statistic: 'Biofuel', value: '19,638,270,259.08' },
            { statistic: 'Solar Energy', value: '96,700.00' },
            { statistic: 'Nuclear Energy', value: '14,972,481,000.00' }
        ],
        CA: [
            { statistic: 'State', value: 'California' },
            { statistic: 'Biofuel', value: '29,864,898,530.36' },
            { statistic: 'Solar Energy', value: '6,082,700.00' },
            { statistic: 'Nuclear Energy', value: '17,718,368,000.00' }
        ],
        CO: [
            { statistic: 'State', value: 'Colorado' },
            { statistic: 'Biofuel', value: '4,778,703,840.00' },
            { statistic: 'Solar Energy', value: '377,200.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        CT: [
            { statistic: 'State', value: 'Connecticut' },
            { statistic: 'Biofuel', value: '9,149,125,742.48' },
            { statistic: 'Solar Energy', value: '147,000.00' },
            { statistic: 'Nuclear Energy', value: '13,669,458,000.00' }
        ],
        DE: [
            { statistic: 'State', value: 'Delaware' },
            { statistic: 'Biofuel', value: '0.00' },
            { statistic: 'Solar Energy', value: '22,200.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        FL: [
            { statistic: 'State', value: 'Florida' },
            { statistic: 'Biofuel', value: '36,868,769.44' },
            { statistic: 'Solar Energy', value: '1,385,700.00' },
            { statistic: 'Nuclear Energy', value: '29,940,194,000.00' }
        ],
        GA: [
            { statistic: 'State', value: 'Georgia' },
            { statistic: 'Biofuel', value: '605,027,065.41' },
            { statistic: 'Solar Energy', value: '733,200.00' },
            { statistic: 'Nuclear Energy', value: '37,840,407,000.00' }
        ],
        HI: [
            { statistic: 'State', value: 'Hawaii' },
            { statistic: 'Biofuel', value: '1,568,407,841.57' },
            { statistic: 'Solar Energy', value: '188,200.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        ID: [
            { statistic: 'State', value: 'Idaho' },
            { statistic: 'Biofuel', value: '1,795,981,303.60' },
            { statistic: 'Solar Energy', value: '71,200.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        IL: [
            { statistic: 'State', value: 'Illinois' },
            { statistic: 'Biofuel', value: '113,747,940,537.47' },
            { statistic: 'Solar Energy', value: '279,500.00' },
            { statistic: 'Nuclear Energy', value: '97,559,460,000.00' }
        ],
        IN: [
            { statistic: 'State', value: 'Indiana' },
            { statistic: 'Biofuel', value: '66,028,828,080.12' },
            { statistic: 'Solar Energy', value: '136,300.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        IA: [
            { statistic: 'State', value: 'Iowa' },
            { statistic: 'Biofuel', value: '271,560,307,105.40' },
            { statistic: 'Solar Energy', value: '69,300.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        KS: [
            { statistic: 'State', value: 'Kansas' },
            { statistic: 'Biofuel', value: '45,142,351,715.45' },
            { statistic: 'Solar Energy', value: '16,100.00' },
            { statistic: 'Nuclear Energy', value: '10,301,865,000.00' }
        ],
        KY: [
            { statistic: 'State', value: 'Kentucky' },
            { statistic: 'Biofuel', value: '16,225,008,000.17' },
            { statistic: 'Solar Energy', value: '14,800.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        LA: [
            { statistic: 'State', value: 'Louisiana' },
            { statistic: 'Biofuel', value: '33,979,649,715.13' },
            { statistic: 'Solar Energy', value: '46,800.00' },
            { statistic: 'Nuclear Energy', value: '12,211,457,000.00' }
        ],
        ME: [
            { statistic: 'State', value: 'Maine' },
            { statistic: 'Biofuel', value: '271,714,186.01' },
            { statistic: 'Solar Energy', value: '76,800.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        MD: [
            { statistic: 'State', value: 'Maryland' },
            { statistic: 'Biofuel', value: '1,000.00' },
            { statistic: 'Solar Energy', value: '199,600.00' },
            { statistic: 'Nuclear Energy', value: '15,027,162,000.00' }
        ],
        MA: [
            { statistic: 'State', value: 'Massachusetts' },
            { statistic: 'Biofuel', value: '261,641,835.21' },
            { statistic: 'Solar Energy', value: '535,300.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        MI: [
            { statistic: 'State', value: 'Michigan' },
            { statistic: 'Biofuel', value: '14,494,443,601.07' },
            { statistic: 'Solar Energy', value: '110,500.00' },
            { statistic: 'Nuclear Energy', value: '27,996,108,000.00' }
        ],
        MN: [
            { statistic: 'State', value: 'Minnesota' },
            { statistic: 'Biofuel', value: '64,570,462,565.88' },
            { statistic: 'Solar Energy', value: '214,400.00' },
            { statistic: 'Nuclear Energy', value: '11,923,652,000.00' }
        ],
        MS: [
            { statistic: 'State', value: 'Mississippi' },
            { statistic: 'Biofuel', value: '1,295,724,461.01' },
            { statistic: 'Solar Energy', value: '52,600.00' },
            { statistic: 'Nuclear Energy', value: '11,749,621,000.00' }
        ],
        MO: [
            { statistic: 'State', value: 'Missouri' },
            { statistic: 'Biofuel', value: '74,488,912,253.43' },
            { statistic: 'Solar Energy', value: '68,100.00' },
            { statistic: 'Nuclear Energy', value: '9,179,744,000.00' }
        ],
        MT: [
            { statistic: 'State', value: 'Montana' },
            { statistic: 'Biofuel', value: '5,495,554,292.00' },
            { statistic: 'Solar Energy', value: '8,500.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        NE: [
            { statistic: 'State', value: 'Nebraska' },
            { statistic: 'Biofuel', value: '70,037,878,155.00' },
            { statistic: 'Solar Energy', value: '11,000.00' },
            { statistic: 'Nuclear Energy', value: '6,926,053,000.00' }
        ],
        NV: [
            { statistic: 'State', value: 'Nevada' },
            { statistic: 'Biofuel', value: '0.00' },
            { statistic: 'Solar Energy', value: '1,022,200.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        NH: [
            { statistic: 'State', value: 'New Hampshire' },
            { statistic: 'Biofuel', value: '2,095,211,141.27' },
            { statistic: 'Solar Energy', value: '24,400.00' },
            { statistic: 'Nuclear Energy', value: '9,534,781,000.00' }
        ],
        NJ: [
            { statistic: 'State', value: 'New Jersey' },
            { statistic: 'Biofuel', value: '0.00' },
            { statistic: 'Solar Energy', value: '469,100.00' },
            { statistic: 'Nuclear Energy', value: '28,335,474,000.00' }
        ],
        NM: [
            { statistic: 'State', value: 'New Mexico' },
            { statistic: 'Biofuel', value: '4,212,077,348.24' },
            { statistic: 'Solar Energy', value: '256,600.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        NY: [
            { statistic: 'State', value: 'New York' },
            { statistic: 'Biofuel', value: '1,866,476,112.84' },
            { statistic: 'Solar Energy', value: '525,600.00' },
            { statistic: 'Nuclear Energy', value: '27,524,923,000.00' }
        ],
        NC: [
            { statistic: 'State', value: 'North Carolina' },
            { statistic: 'Biofuel', value: '2,290,659,071.81' },
            { statistic: 'Solar Energy', value: '1,185,800.00' },
            { statistic: 'Nuclear Energy', value: '42,335,726,000.00' }
        ],
        ND: [
            { statistic: 'State', value: 'North Dakota' },
            { statistic: 'Biofuel', value: '43,783,012,166.88' },
            { statistic: 'Solar Energy', value: '200.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        OH: [
            { statistic: 'State', value: 'Ohio' },
            { statistic: 'Biofuel', value: '22,614,250,683.99' },
            { statistic: 'Solar Energy', value: '124,700.00' },
            { statistic: 'Nuclear Energy', value: '16,206,640,000.00' }
        ],
        OK: [
            { statistic: 'State', value: 'Oklahoma' },
            { statistic: 'Biofuel', value: '14,069,947,056.12' },
            { statistic: 'Solar Energy', value: '16,700.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        OR: [
            { statistic: 'State', value: 'Oregon' },
            { statistic: 'Biofuel', value: '4,343,884,252.55' },
            { statistic: 'Solar Energy', value: '201,300.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        PA: [
            { statistic: 'State', value: 'Pennsylvania' },
            { statistic: 'Biofuel', value: '20,570,141,880.39' },
            { statistic: 'Solar Energy', value: '104,700.00' },
            { statistic: 'Nuclear Energy', value: '75,271,581,000.00' }
        ],
        RI: [
            { statistic: 'State', value: 'Rhode Island' },
            { statistic: 'Biofuel', value: '0.00' },
            { statistic: 'Solar Energy', value: '88,800.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        SC: [
            { statistic: 'State', value: 'South Carolina' },
            { statistic: 'Biofuel', value: '1,332,982,367.54' },
            { statistic: 'Solar Energy', value: '294,200.00' },
            { statistic: 'Nuclear Energy', value: '55,622,340,000.00' }
        ],
        SD: [
            { statistic: 'State', value: 'South Dakota' },
            { statistic: 'Biofuel', value: '43,250,407,540.97' },
            { statistic: 'Solar Energy', value: '400.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        TN: [
            { statistic: 'State', value: 'Tennessee' },
            { statistic: 'Biofuel', value: '16,556,392,795.75' },
            { statistic: 'Solar Energy', value: '75,200.00' },
            { statistic: 'Nuclear Energy', value: '37,937,437,000.00' }
        ],
        TX: [
            { statistic: 'State', value: 'Texas' },
            { statistic: 'Biofuel', value: '72,894,313,785.91' },
            { statistic: 'Solar Energy', value: '2,543,700.00' },
            { statistic: 'Nuclear Energy', value: '40,679,870,000.00' }
        ],
        UT: [
            { statistic: 'State', value: 'Utah' },
            { statistic: 'Biofuel', value: '414,967.19' },
            { statistic: 'Solar Energy', value: '462,900.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        VT: [
            { statistic: 'State', value: 'Vermont' },
            { statistic: 'Biofuel', value: '877,847.03' },
            { statistic: 'Solar Energy', value: '41,400.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        VA: [
            { statistic: 'State', value: 'Virginia' },
            { statistic: 'Biofuel', value: '1,349,898,322.30' },
            { statistic: 'Solar Energy', value: '501,500.00' },
            { statistic: 'Nuclear Energy', value: '29,662,935,000.00' }
        ],
        WA: [
            { statistic: 'State', value: 'Washington' },
            { statistic: 'Biofuel', value: '31,290,087,030.40' },
            { statistic: 'Solar Energy', value: '47,700.00' },
            { statistic: 'Nuclear Energy', value: '8,435,018,000.00' }
        ],
        WV: [
            { statistic: 'State', value: 'West Virginia' },
            { statistic: 'Biofuel', value: '10,920,983.33' },
            { statistic: 'Solar Energy', value: '3,300.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ],
        WI: [
            { statistic: 'State', value: 'Wisconsin' },
            { statistic: 'Biofuel', value: '23,936,070,724.89' },
            { statistic: 'Solar Energy', value: '103,300.00' },
            { statistic: 'Nuclear Energy', value: '9,682,767,000.00' }
        ],
        WY: [
            { statistic: 'State', value: 'Wyoming' },
            { statistic: 'Biofuel', value: '6,242,187,847.80' },
            { statistic: 'Solar Energy', value: '20,900.00' },
            { statistic: 'Nuclear Energy', value: '0.00' }
        ]
        
    };

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetImageId = this.dataset.target;
            const targetImage = document.getElementById(`image${targetImageId}`);

            // Reset all images to hidden

            // Clear existing table rows
            statisticsTableBody.innerHTML = '';
            // Update the text content based on the clicked button
            /*dataParagraph.textContent = `You clicked the button for ${targetImageId}.`;*/

            // Populate table with statistics for the selected state
            stateStatistics[targetImageId].forEach(stat => {
                const row = document.createElement('tr');
                row.classList.add('table-row');
                row.innerHTML = `<td class="statistic">${stat.statistic}</td><td class="value">${stat.value}</td>`;
                statisticsTableBody.appendChild(row);

                // document.querySelectorAll('img').forEach(img => {
                //     img.classList.remove('visible');
                // });

                // // Toggle the visibility for specific image
                // targetImage.classList.toggle('visible');
            });
        });
    });
});

