//busqueda lineal 

#include <iostream>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

using namespace std;

int main ()
{ 


	int i,b,n,opc,o,c;
	bool z=false;

do{
	system ("cls");
cout<<"¿Cuantos numeros (1-100)? ";
cin>>o;

if(0<o && o<100){
		int a[o];
		
	for(c=0; c<o; c++){
		cout<<"Dame el numero de la posicion: a["<<c+1<<"]: ";
		cin>>a[c];
	}

do{
	system ("cls");
	cout<< "\nDame el valor que deseas buscar: ";
	cin>>b;
	
	
		for (i=0; i<o; i++)
		{ 
			
			if(a[i] ==b)
			{
				z=true;
			
				cout<<"\n\n Sea encontrado el valor :  "<<b<<" en esta posicion: a ["<<i+1<<"]";
				
				for(i=i+1;i<o;i++){
					if(a[i] ==b){
						cout<<"\nTambien se encontro en esta posicion: a ["<<i+1<<"]";
						
					}
				
					
				}
				
			}
		
		
		}
		
			if (z==false){
			cout<<"\nNumero no encontrado";
		
			}
			cout<< "\n\n deseas repetir el la busqueda de nuevo?   (si  =  1;   no = 0)  ";
		cin>>opc;
		}while(opc==1);
			
			
			
	
} else{cout<<"Numero no valido";
}



	cout<< "\n\n deseas repetir el programa de nuevo?   (si  =  1;   no = 0)  ";
		cin>>opc;
		
		
		z=false;
	
	}while (opc ==1);


	return 0;
}
