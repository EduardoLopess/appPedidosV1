import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useOrder } from "../../hooks/useOrder";
import style from "./style";
import { useControllOrder } from "../../context/controllOrder";

export const CartScreen = () => {
  const { finishOrder, cancelOrder } = useOrder();


 const DataTest = [
  {
    id: '1',
    nome: 'X-Burguer',
    preco: 25.90,
    quantidade: 2,
    adicionais: [
      { id: 'a1', nome: 'Bacon', preco: 3.00 },
      { id: 'a2', nome: 'Queijo Extra', preco: 2.50 }
    ],
    observacao: 'Sem cebola'
  },
  {
    id: '2',
    nome: 'Coca-Cola 2L',
    preco: 12.00,
    quantidade: 1,
    adicionais: [],
    observacao: ''
  },
  {
    id: '3',
    nome: 'Batata Frita',
    preco: 18.00,
    quantidade: 1,
    adicionais: [
      { id: 'a3', nome: 'Cheddar', preco: 4.00 }
    ],
    observacao: ''
  }
];


  return (
    <View style={style.container}>

      <View style={style.containerContent}>
        {DataTest.map(item => {
          <View>
            
          </View>
        })}

      </View>

      <View style={style.containerTotal}>
        <Text style={style.TxtTotal}>TOTAL:   R$: 999,99</Text>
      </View>

      <View style={style.containerBtnActions}>

        <TouchableOpacity onPress={cancelOrder} style={style.btnCancel}>
          <Text style={style.txtCancel}>CANCELAR PEDIDO</Text>
        </TouchableOpacity>


        <TouchableOpacity style={style.btnFinish}>
          <Text style={style.txtFinish}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
