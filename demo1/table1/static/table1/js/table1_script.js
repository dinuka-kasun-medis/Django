//Table 1
var app = angular.module('bsInfoAsetTransApp', [])

app.controller('BsInfoAsetTransController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;
    $scope.check_search = false;

    //initialize model
    var init_data = {
        'transport_air': {
            'Table_1': {
                //Tab 1
                'BsAstAirAircrafts': [{
                    assets : 'Airplanes',
                    num_pub : null,
                    num_pvt : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Helicopters',
                    num_pub : null,
                    num_pvt : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BsAstAirEquipment': [{
                    assets : 'Office equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Baggage handling system',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Cargo handling system',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Aero bridges',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Security equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Vehicles',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BsAstAirSupplies': [{
                    assets : 'Fuel (per Liter)',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BsAstAirOthers': [{
                    assets : 'Runway',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Apron Parking areas',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Piers',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                //Tab 2
                'BsAstAirStructures': [{
                    assets : 'Airport Terminal buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Aircraft Hangars and associated buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Administrative buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Fire services buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Airport Maintenance',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Sri Lankan Airlines office complex',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Navigation services complex',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Control tower',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }],
                'BsAstAirEmployment': [{
                    assets : 'Total Number of Employees of Air Transportation Companies',
                    male : null,
                    female : null,
                    total : null,
                },{
                    assets : 'Total Number of Other Employees in Air Transport',
                    male : null,
                    female : null,
                    total : null,
                }],
            }
        }
    }

    $scope.bsInfoAsetTrans = angular.copy(init_data);

    //disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        }
        else {
            $scope.is_edit_disable = false;
            $scope.check_search = false;
        }
    }

    //Add Enumerate Filed
    $scope.insertAsset = function(table) {
        var new_row;
        if(table == 'BsAstAirAircrafts') {
            new_row = {
                assets : '',
                num_pub : null,
                num_pvt : null,
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsAstAirEquipment') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsAstAirSupplies') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsAstAirStructures') {
            new_row = {
                tuk_companies: '',
                public: null,
                private: null,
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }
        $scope.bsInfoAsetTrans.transport_air.Table_1[table].push(new_row);
    }

    //remove Enumerate Filed
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsAstAirAircrafts') {
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirAircrafts.splice(index, 1);
        }
        else if(table == 'BsAstAirEquipment') {
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirEquipment.splice(index, 1);
        }
        else if(table == 'BsAstAirSupplies') {
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirSupplies.splice(index, 1);
        }
        else if(table == 'BsAstAirStructures') {
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirStructures.splice(index, 1);
        }
    }

    //save Bs Data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsInfoAsetTrans),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'transport_air'
                }),
            }).success(function(data) {
                $scope.is_edit = false;
                if (data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $scope.updateEnums();
                    console.log('saveBsData  - bsInfoAsetTrans', $scope.bsInfoAsetTrans);
                    $scope.bsInfoAsetTrans = init_data;
                    $("#modal-container-239453").modal('show');
                }
            })
        }
    }

    //edit Bs Data
    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'transport_air',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.transport_air.Table_1, function(value, index) {
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsInfoAsetTrans = data;
                        console.log('editBsData - bsInfoAsetTrans', $scope.bsInfoAsetTrans);
                        $scope.getEnumDataFromStart();
                    }
                    else {
                        $("#modal-container-239456").modal('show');
                    }
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    //search Bs Data
	$scope.searchBsData = function(form) {
        document.getElementById("clearbtn").disabled = true;
        document.getElementById("editbtn").disabled = true;
        document.getElementById("subbtn").disabled = true;

        $scope.is_search = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'transport_air',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
//                $scope.bsInfoAsetTrans = data;
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.transport_air.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsInfoAsetTrans = data;
                    }
                    else {
                        $("#modal-container-239456").modal('show');
                    }
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    //cancel Bs Data
	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsInfoAsetTrans = init_data;
        location.reload();
    }

    //clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.bsInfoAsetTrans = angular.copy(init_data);
		location.reload();
	}

    $scope.enum_data = {
        'transport_air': {
            'Table_1': {
                'BsAstAirAircrafts': [],
                'BsAstAirEquipment': [],
                'BsAstAirSupplies': [],
                'BsAstAirStructures': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var bsAstAirAircrafts_e_index = 0;
        var bsAstAirEquipment_e_index = 0;
        var bsAstAirSupplies_e_index = 0;
        var bsAstAirStructures_e_index = 0;
        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirAircrafts, function(value, index, key) {
            if(value.assets != 'Airplanes' && value.assets != 'Helicopters') {
                var enum_val = {
                    oldasset: value.assets,
                    newasset: null,
                    enum_index: bsAstAirAircrafts_e_index,
                    bs_asset_field: 'assets',
                    dl_tables: {
                        'Table_2': {
                            'DlAirDmgAircrafts': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                bsAstAirAircrafts_e_index = bsAstAirAircrafts_e_index + 1;
                $scope.enum_data.transport_air.Table_1.BsAstAirAircrafts.push(enum_val);
            }
        })
        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirEquipment, function(value, index, key) {
            if(value.assets != 'Office equipment' && value.assets != 'Baggage handling system' &&
                value.assets != 'Cargo handling system' && value.assets != 'Aero bridges' &&
                value.assets != 'Security equipment' && value.assets != 'Vehicles') {
                var enum_val = {
                    oldasset: value.assets,
                    newasset: null,
                    enum_index: bsAstAirEquipment_e_index,
                    bs_asset_field: 'assets',
                    dl_tables: {
                        'Table_2': {
                            'DlAirDmgEquipment': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                bsAstAirEquipment_e_index = bsAstAirEquipment_e_index + 1;
                $scope.enum_data.transport_air.Table_1.BsAstAirEquipment.push(enum_val);
            }
        })
        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirSupplies, function(value, index, key) {
            if(value.assets != 'Fuel (per Liter)') {
                var enum_val = {
                    oldasset: value.assets,
                    newasset: null,
                    enum_index: bsAstAirSupplies_e_index,
                    bs_asset_field: 'assets',
                    dl_tables: {
                        'Table_2': {
                            'DlAirDmgSupplies': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                bsAstAirSupplies_e_index = bsAstAirSupplies_e_index + 1;
                $scope.enum_data.transport_air.Table_1.BsAstAirSupplies.push(enum_val);
            }
        })
        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirStructures, function(value, index, key) {
            if(value.assets != 'Airport Terminal buildings' &&
                value.assets != 'Aircraft Hangars and associated buildings' &&
                value.assets != 'Administrative buildings' &&
                value.assets != 'Fire services buildings' &&
                value.assets != 'Airport Maintenance' &&
                value.assets != 'Sri Lankan Airlines office complex' &&
                value.assets != 'Navigation services complex' &&
                value.assets != 'Control tower') {

                var enum_val = {
                    oldasset: value.assets,
                    newasset: null,
                    enum_index: bsAstAirStructures_e_index,
                    bs_asset_field: 'assets',
                    dl_tables: {
                        'Table_2': {
                            'DlAirDmgGstructures': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                bsAstAirStructures_e_index = bsAstAirStructures_e_index + 1;
                $scope.enum_data.transport_air.Table_1.BsAstAirStructures.push(enum_val);
            }
        })
        console.log('getEnumDataFrom Start - enum_data', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log('getEnumDataFrom End - bsInfoAsetTrans', $scope.bsInfoAsetTrans);
        var bsAstAirAircrafts_e_index = 0;
        var bsAstAirEquipment_e_index = 0;
        var bsAstAirSupplies_e_index = 0;
        var bsAstAirStructures_e_index = 0;

        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirAircrafts, function(value, key) {
            if(value.assets != 'Airplanes' && value.assets != 'Helicopters') {
                angular.forEach($scope.enum_data.transport_air.Table_1.BsAstAirAircrafts, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_air.Table_1.BsAstAirAircrafts);
                    if(each_enum.enum_index == bsAstAirAircrafts_e_index) {
                        $scope.enum_data.transport_air.Table_1.BsAstAirAircrafts[index].newasset = value.assets;
                    }
                })
                bsAstAirAircrafts_e_index = bsAstAirAircrafts_e_index + 1;
            }
        })

        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirEquipment, function(value, key) {
            if(value.assets != 'Office equipment' && value.assets != 'Baggage handling system' &&
                value.assets != 'Cargo handling system' && value.assets != 'Aero bridges' &&
                value.assets != 'Security equipment' && value.assets != 'Vehicles') {
                angular.forEach($scope.enum_data.transport_air.Table_1.BsAstAirEquipment, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_air.Table_1.BsAstAirEquipment);
                    if(each_enum.enum_index == bsAstAirEquipment_e_index) {
                        $scope.enum_data.transport_air.Table_1.BsAstAirEquipment[index].newasset = value.assets;
                    }
                })
                bsAstAirEquipment_e_index = bsAstAirEquipment_e_index + 1;
            }
        })

        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirSupplies, function(value, key) {
            if(value.assets != 'Fuel (per Liter)') {
                angular.forEach($scope.enum_data.transport_air.Table_1.BsAstAirSupplies, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_air.Table_1.BsAstAirSupplies);
                    if(each_enum.enum_index == bsAstAirSupplies_e_index) {
                        $scope.enum_data.transport_air.Table_1.BsAstAirSupplies[index].newasset = value.assets;
                    }
                })
                bsAstAirSupplies_e_index = bsAstAirSupplies_e_index + 1;
            }
        })

        angular.forEach($scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirStructures, function(value, key) {
            if(value.assets != 'Airport Terminal buildings' &&
                value.assets != 'Aircraft Hangars and associated buildings' &&
                value.assets != 'Administrative buildings' &&
                value.assets != 'Fire services buildings' &&
                value.assets != 'Airport Maintenance' &&
                value.assets != 'Sri Lankan Airlines office complex' &&
                value.assets != 'Navigation services complex' &&
                value.assets != 'Control tower') {
                angular.forEach($scope.enum_data.transport_air.Table_1.BsAstAirStructures, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_air.Table_1.BsAstAirStructures);
                    if(each_enum.enum_index == bsAstAirStructures_e_index) {
                        $scope.enum_data.transport_air.Table_1.BsAstAirStructures[index].newasset = value.assets;
                    }
                })
                bsAstAirStructures_e_index = bsAstAirStructures_e_index + 1;
            }
        })

        console.log('getEnumDataFrom End - enum_data', $scope.enum_data);
    }

    $scope.updateEnums = function() {
        $scope.getEnumDataFromEnd();
        $http({
            method: 'POST',
            url: '/update_enumirate_dl_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'enum_data': ($scope.enum_data),
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.bs_date,
                    'user_id': $scope.user_id
                },
                'is_edit': $scope.is_edit,
                'sector': 'transport_air'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
//            if(response.data == 'False') {
//                alert('False');
//            }
//            else {
//                alert('True');
//            }
        }, function errorCallback(response) {

        });
    }
}]);
