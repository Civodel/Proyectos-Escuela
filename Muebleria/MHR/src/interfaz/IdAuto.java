/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package interfaz;

import conexionMysql.ConectarMysql;
import java.sql.Connection;
import javax.swing.JOptionPane;
import mysqlcrud.CRUDusuarios;
import mysqlcrud.usuarios;

/**
 *
 * @author Ivan
 */
public class IdAuto extends javax.swing.JFrame {

    ConectarMysql con;

    /**
     * Creates new form IdAuto
     */
    public IdAuto() {
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        serverstatus = new javax.swing.JLabel();
        errortext = new javax.swing.JLabel();
        avatar = new javax.swing.JLabel();
        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        idtext = new javax.swing.JTextField();
        idboton = new javax.swing.JButton();
        serverstatus2 = new javax.swing.JLabel();
        serv = new javax.swing.JButton();
        fondo = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        serverstatus.setFont(new java.awt.Font("Copperplate Gothic Bold", 0, 15)); // NOI18N
        serverstatus.setForeground(new java.awt.Color(0, 153, 51));
        getContentPane().add(serverstatus, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 450, 222, 23));

        errortext.setFont(new java.awt.Font("Copperplate Gothic Bold", 0, 14)); // NOI18N
        getContentPane().add(errortext, new org.netbeans.lib.awtextra.AbsoluteConstraints(255, 345, 287, 20));

        avatar.setIcon(new javax.swing.ImageIcon(getClass().getResource("/imagenes/avatar3.png"))); // NOI18N
        getContentPane().add(avatar, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 80, 180, 200));

        jPanel1.setBackground(new java.awt.Color(77, 63, 54));

        jLabel1.setFont(new java.awt.Font("Copperplate Gothic Bold", 0, 20)); // NOI18N
        jLabel1.setText("ID:");

        idtext.setToolTipText("");
        idtext.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                idtextActionPerformed(evt);
            }
        });

        idboton.setText("Entrar");
        idboton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                idbotonActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(idtext, javax.swing.GroupLayout.PREFERRED_SIZE, 238, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(52, 52, 52))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(98, 98, 98)
                .addComponent(idboton, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(266, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(idtext, javax.swing.GroupLayout.PREFERRED_SIZE, 28, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(34, 34, 34)
                .addComponent(idboton, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(70, 70, 70))
        );

        idtext.getAccessibleContext().setAccessibleName("");

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 40, 310, 440));

        serverstatus2.setFont(new java.awt.Font("Copperplate Gothic Bold", 0, 14)); // NOI18N
        serverstatus2.setForeground(new java.awt.Color(255, 0, 0));
        getContentPane().add(serverstatus2, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 450, 222, 23));

        serv.setText("Server");
        serv.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                servActionPerformed(evt);
            }
        });
        getContentPane().add(serv, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 490, -1, -1));

        fondo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/imagenes/f1.jpg"))); // NOI18N
        getContentPane().add(fondo, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 800, 533));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void idbotonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_idbotonActionPerformed

        CRUDusuarios crud1 = new CRUDusuarios();
        usuarios us1 = new usuarios();

        String idt = idtext.getText();
        System.out.println(idt);

        if (!idtext.getText().equals("")) {
            if (idtext.getText().matches("[0-9]*")) {
                int ide = Integer.parseInt(idt);
                System.out.println(ide);
                if (ide == 444) {

                    us1.setIdusuarios(ide);
                  
                    if (crud1.validarID(us1)) {
                        
                       System.out.println(crud1);
                        System.out.println(crud1.validarID(us1));

                        sup supin = new sup();
                        supin.setVisible(true);
                        this.dispose();

                        System.out.println(" que peduki");
                    } else {

                        JOptionPane.showMessageDialog(null, "tas mal we");
                    }

                } else {
                    if (ide == 363) {

                        us1.setIdusuarios(ide);
                        if (crud1.validarID(us1)) {

                            admin adin = new admin();
                            adin.setVisible(true);
                            this.dispose();

                            System.out.println(" que pei");
                        } else {

                            JOptionPane.showMessageDialog(null, "tas mal we");
                        }

                    } else
                    {
                       JOptionPane.showMessageDialog(null, "Id no encontrado/valido");
                    }

                }
            } else {
                JOptionPane.showMessageDialog(null, "Solo debe contener numeros");
            }

        } else {
            JOptionPane.showMessageDialog(null, "Campo de ID vacio");
        }


    }//GEN-LAST:event_idbotonActionPerformed

    private void servActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_servActionPerformed
        // TODO add your handling code here:
        con = new ConectarMysql();
        Connection reg = con.obtenercone();
        if (reg == null) {
            serverstatus.setText(null);
            serverstatus2.setText("Server is Off");

        } else {
            serverstatus2.setText(null);
            serverstatus.setText("Server is On");
            System.out.println(reg);

        }

    }//GEN-LAST:event_servActionPerformed

    private void idtextActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_idtextActionPerformed

    }//GEN-LAST:event_idtextActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(IdAuto.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(IdAuto.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(IdAuto.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(IdAuto.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new IdAuto().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel avatar;
    private javax.swing.JLabel errortext;
    private javax.swing.JLabel fondo;
    private javax.swing.JButton idboton;
    private javax.swing.JTextField idtext;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JButton serv;
    private javax.swing.JLabel serverstatus;
    private javax.swing.JLabel serverstatus2;
    // End of variables declaration//GEN-END:variables
}